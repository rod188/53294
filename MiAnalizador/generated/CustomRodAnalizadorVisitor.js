import RodAnalizadorVisitor from './RodAnalizadorVisitor.js';

export default class CustomRodAnalizadorVisitor extends RodAnalizadorVisitor {

    // programa: STACK nombre '{' comandos '}'
    visitPrograma(ctx) {
    const nombre = this.visit(ctx.nombre());
    const comandos = this.visit(ctx.comandos());
    return `// Implementación sin clases (solo arrays)\n${comandos}`;
    }

    // nombre: ID
    visitNombre(ctx) {
        return ctx.ID().getText();
    }

    // comandos: (operacion)*
    visitComandos(ctx) {
        return ctx.operacion()
            .map(op => this.visit(op))
            .filter(line => line) // elimina undefined/null
            .join("\n");
    }

    // operacion: push | pop | peek | crear
    visitOperacion(ctx) {
        return this.visitChildren(ctx);
    }

    // crear: CREATE '(' lista ')' EXCLAMATION
    visitCrear(ctx) {
    const lista = this.visit(ctx.lista());
    const nombrePila = this.getNombrePila(ctx);
    // Una sola línea, con comentario
    return `let ${nombrePila} = ${lista};  // crear(${lista})`;
}

    // push: PUSH '(' valor ')' EXCLAMATION
    visitPush(ctx) {
    const val = this.visit(ctx.valor());
    const nombrePila = this.getNombrePila(ctx);
    return `${nombrePila}.push(${val});  // empujar(${val})!`;
    }   

    // pop: POP '(' ')' EXCLAMATION
    visitPop(ctx) {
    const nombrePila = this.getNombrePila(ctx);
    return `${nombrePila}.pop();  // sacar()!`;
    }

    // peek: PEEK '(' ')' EXCLAMATION
    visitPeek(ctx) {
    const nombrePila = this.getNombrePila(ctx);
    return `console.log(${nombrePila}[${nombrePila}.length - 1]);  // mirar()!`;
    }

    // valor: NUMBER | STRING
    visitValor(ctx) {
        return ctx.getText();
    }

    // lista: '[' valor (',' valor)* ']'
    visitLista(ctx) {
        const valores = ctx.valor().map(v => this.visit(v));
        return `[${valores.join(", ")}]`;
    }

    // Sube por el árbol hasta encontrar el nodo 'programa' y devuelve el nombre de la pila
    getNombrePila(ctx) {
        let node = ctx;
        while (node && typeof node.nombre !== 'function') {
            node = node.parentCtx;
        }
        return node ? node.nombre().ID().getText() : "pila";
    }
}

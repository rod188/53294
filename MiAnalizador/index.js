import RodAnalizadorLexer from "./generated/RodAnalizadorLexer.js";
import RodAnalizadorParser from "./generated/RodAnalizadorParser.js";
import CustomRodAnalizadorVisitor from "./generated/CustomRodAnalizadorVisitor.js";
import antlr4, { CharStreams, CommonTokenStream } from "antlr4";
import readline from 'readline';
import fs from 'fs';

async function main() {
    let input;

    // Intento de leer la entrada desde el archivo input.txt
    try {
        input = fs.readFileSync('input.txt', 'utf8');
    } catch (err) {
        // Si no es posible leer el archivo, solicitar la entrada del usuario por teclado
        input = await leerCadena(); 
        console.log(input);
    }

    // Proceso la entrada con el analizador para obtener el lexer
    let inputStream = CharStreams.fromString(input);
    let lexer = new RodAnalizadorLexer(inputStream);    
    
    "Validar errores léxicos"
    lexer.removeErrorListeners();
        lexer.addErrorListener({
            syntaxError(recognizer, offendingSymbol, line, column, msg) {
                console.error(`❌ Error léxico en línea ${line}, columna ${column}: carácter no reconocido -> '${msg}'`);
        }
    });

    //Verificar si el lexer está generando tokens 
    console.log("Verificando tokens generados por el lexer...");
    const tokens = lexer.getAllTokens();
    if (tokens.length === 0) {
        console.error("No se generaron tokens. Verifica la entrada y la gramática.");
        return;
    }

    //Mostrar la tabla de tokens y lexemas
    console.log("\nTabla de Tokens y Lexemas:");
    console.log("--------------------------------------------------");
    console.log("| Lexema         | Token                         |");
    console.log("--------------------------------------------------");

    // Recorrer todos los tokens generados por el lexer
    for (let token of tokens) {
        // Obtener el nombre simbólico del token
        const tokenType = RodAnalizadorLexer.symbolicNames[token.type] || `UNKNOWN (${token.type})`;
        const lexema = token.text; // Obtener el lexema (texto del token)
        console.log(`| ${lexema.padEnd(14)} | ${tokenType.padEnd(30)}|`);
    }
    console.log("--------------------------------------------------"); 

    /* Vuelve a procesar la entrada, obtener el lexer, el código tokenizado y el parser 
     * Es necesario volver a procesar la entrada porque la función getAllTokens() consume
     * todos los tokens reconocidos y vacía el lexer. */
    inputStream = CharStreams.fromString(input);
    lexer = new RodAnalizadorLexer(inputStream);

    //Mostrar el error léxico si se encuentra alguno en una línea específica
    lexer.removeErrorListeners();
        lexer.addErrorListener({
            syntaxError(recognizer, offendingSymbol, line, column, msg) {
                console.error(`❌ Error léxico en línea ${line}, columna ${column}: carácter no reconocido -> '${msg}'`);
        }
    });


    let tokenStream = new CommonTokenStream(lexer);
    let parser = new RodAnalizadorParser(tokenStream);

    //Mostrar el error sintáctico si se encuentra alguno en una línea específica
    parser.removeErrorListeners();
        parser.addErrorListener({
            syntaxError(recognizer, offendingSymbol, line, column, msg) {
                console.error(`❌ Error sintáctico en línea ${line}, columna ${column}: ${msg}`);
        }
    });

    let tree = parser.programa();  /* "prog" Debe ser  el axioma definido en el archivo .g4*/

    // Verificar si se produjeron errores sintácticos */
    if (parser.syntaxErrorsCount > 0) {
        console.error("\nSe encontraron errores de sintáxis en el código.");
    } else {
        console.log("\nCódigo válido.");
        const cadena_tree = tree.toStringTree(parser.ruleNames);
        console.log(`\nÁrbol de derivación:\n ${cadena_tree}`);

        /* Traducir el codigo a javascript usando VISITOR*/

        const visitor = new CustomRodAnalizadorVisitor();
        const codigo_traducido = visitor.visit(tree);

        console.log("\nTraducción a JavaScript:\n\n" + codigo_traducido);        

    // Ejecutar código traducido
    try {
        const resultado = eval(codigo_traducido);
        console.log(`\nCódigo ejecutado exitosamente.`);
    } catch (err) {
        console.error("\nError al ejecutar el código traducido: ", err);
    }
    }
}

function leerCadena() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {
        rl.question("Ingrese una cadena: ", (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

// Ejecuta la función principal
main();

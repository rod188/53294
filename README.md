# Analizador de Pila - ANTLR4 + JavaScript

Analizador léxico y sintáctico de un lenguaje de manejo de pilas, implementado con ANTLR4 y JavaScript.

## Requisitos previos

Antes de ejecutar el proyecto, se debe de tener instalado:

- [Node.js](https://nodejs.org/) (versión 16 o superior)
- [Java](https://www.java.com/) (necesario para ANTLR4)
- [Git](https://git-scm.com/)
- [Visual Studio Code](https://code.visualstudio.com/download)
- [Plugin ANTLR4](https://marketplace.visualstudio.com/items?itemName=mike-lischke.vscode-antlr4) 
  instalado en VS Code (para visualizar el árbol gráficamente)

## Clonación del repositorio

1) Abrir el CMD y ejecutar el siguiente comando:

```bash
git clone https://github.com/rod188/53294.git
```

2) Entrar a la carpeta del proyecto:

```bash
cd 53294/MiAnalizador
```

## Instalación de dependencias

Una vez dentro de la carpeta `MiAnalizador`, se deben instalar las dependencias:

```bash
npm install
```
Es importante realizar este proceso para la recreación de la carpeta "node_modules" que contiene la librería de ANTLR4.<br>
Esto con el objetivo de ejecutar el comando "npm start" sin errores.

## Uso

### 1 — Abrir Visual Studio Code con CMD

Luego de haber instalado las dependencias, ejecute el siguiente comando dentro de la carpeta `MiAnalizador`:

```bash
code .
```
Lo que hará esto es abrir el VS Code de forma automática, viéndose todos los archivos del analizador. <br>
Sí el VS Code pide permisos por la confianza del proyecto, usted seleccione "Sí/Yes".

### 2 — Escribir la entrada

Para analizar una entrada, se debe de editar el archivo `input.txt` con el código que se desee analizar. <br>
Por ejemplo:
```
pila Ejemplo {
crear([10, 20, 30])!
empujar(40)!
}
```
Presione Ctrl+S para guardar los cambios en el archivo .txt, de lo contrario el analizador puede no detectar la entrada correctamente.

### 3 — Ejecutar el analizador
Abra una nueva terminal con el comando "Ctrl + ñ", o ábrala siguiendo la siguiente ruta: <br>
Del menú superior: Terminal > New Terminal. <br>
Ya en la terminal ejecute el siguiente comando:

```bash
npm start
```

### 4 — Resultado esperado

El analizador va a mostrar en la terminal:
- Tabla de lexemas y tokens
- Si el código es válido o contiene errores
- Árbol de derivación en formato de texto
- Traducción a JavaScript

### 5 — Árbol de derivación gráfico
Si usted desea observar las derivaciones de la entrada de la gramática en forma gráfica, siga los siguientes pasos: <br>
1) Abra al archivo "RodAnalizador.g4" del menú encontrado en la parte lateral izquierda en VS Code <br>
``
En caso de que usted ya se encuentre en dicho archivo, vuélvalo a abrir.
``<br>
Esto con la finalidad de poder activar el plugin de ANTLR4 correctamente
2) Presione la tecla F5

## Detalles
En el repositorio se encuentran algunos ejemplos de inputs (entradas) que usted puede probar en el analizador.

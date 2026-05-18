# Analizador de Pila - ANTLR4 + JavaScript

Analizador léxico y sintáctico de un lenguaje de manejo de pilas, implementado con ANTLR4 y JavaScript.

## Requisitos previos

Antes de ejecutar el proyecto, se debe de tener instalado:

- [Node.js](https://nodejs.org/) (versión 16 o superior)
- [Java](https://www.java.com/) (necesario para ANTLR4)
- [Git](https://git-scm.com/)
- [Visual Studio Code](https://code.visualstudio.com/download)

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

### 1 — Escribir la entrada

Para analizar una entrada, se debe de editar el archivo `input.txt` con el código que se desee analizar. <br>
Por ejemplo:
```
pila Ejemplo {
crear([10, 20, 30])!
empujar(40)!
}
```
### 2 — Ejecutar el analizador

```bash
npm start
```

### 3 — Resultado esperado

El analizador va a mostrar en la terminal:
- Tabla de lexemas y tokens
- Si el código es válido o contiene errores
- Traducción a JavaScript

Para observar el árbol de derivación solo presione la tecla F5 para la formación del mismo con la entrada

## Detalles
En el repositorio se encuentran algunos ejemplos de inputs (entradas) que usted puede probar en el analizador.

## Parsers y AST
***

- Cuando llega un script
- - Análisis del código
- - Deconstruye el código
- - Reconstruye el código
- - Ejecuta el código
- - Optimiza el código

***

- Javascript se ejecuta línea por línea y se interpreta un paso a la vez

### JS Engine
- Recibe código fuente
- Parsea el código y produce un AST
- Se compila a bytecode y se ejecuta: Es un lenguaje de bajo nivel pero permite que se ejecute mas rapido
- - Mientras se ejecuta hay un proceso que se llama profiling que análiza el código buscando donde se puede optimizar y eventualmente regresa el machine code
- - Este proceso lo hace el optimize compiler
- Se optimiza a machine code y se reemplaza el código base

***

## Parser 

- Lee el código
- Descompone el código en tokens para que la maquina lo pueda entender
- Identifican las palabras claves, operadores, ...
- Mientras se parsea el código se puede producir un syntaxError cuando el motor encuentra código que no es parte de la syntaxis de javascript

## Eager parsing 

- Encuentra errores de sintaxis
- crea el AST
- -  El AST es una representación del código en forma de arbol
- Contruye scopes
- -  Ya sabemos que variables se pueden leer en que partes de código

## Lazy parsing 

- Retrasamos la ejecución de partes del código
- Es el doble de rapido que el Eager parsing 
- No se contruye el AST
- Tenemos información parcial de los scopes

## AST Abstracti Syntax Tree

> https://astexplorer.net/
> https://esprima.org/demo/index.html 

- Antes de ejecutar y compilar o modificar el código se debe leer el AST
- Lo usamos en prettier
- Babel



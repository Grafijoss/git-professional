# Javascript

## Scripts:

- Es una etiqueta de HTML como cualquier otra
- Hay que tener en cuenta que cuando carga una página y se encuentra un script a ejecutar toda la carga se detiene. Por eso se recomienda agregar tus scripts justo antes de cerrar el body para que todo el documento esté disponible.
- - Las etiquetas script pueden contener el código dentro de la etiqueta
- scripts externos
- - Es igual pero se le añade la direccion del la petción o fetch
- - **src**: El atributo cource indica el path desde donde queremos cargar el script de modo externo
- - async. Con async podemos hacer la petición de forma asíncrona y no vamos a detener la carga del DOM hasta que se haga la ejecución del código.
- - defer. La petición es igual asíncrona como en el async pero va a deferir la ejecución del Javascript hasta el final de que se cargue todo el documento.


## Scope

### Global Scope
Variables disponibles de forma global se usa la palabra var, son accesibles por todos los scripts que se cargan en la página y se declaran fuera de una función o bloque. Aquí hay mucho riesgo de sobreescritura.

### Function Scope
Variables declaradas dentro de una función utilizando var sólo visibles dentro de ella misma (incluyendo los argumentos que se pasan a la función).

### Block Scope
Variables definidas dentro de un bloque **{}**, por ejemplo variables declaradas dentro un loop while o for. Se usa let y const para declarar este tipo de variables.

- const
- let 

### Module Scope
Cuando se denota un script de tipo module con el atributo type="module las variables son limitadas al archivo en el que están declaradas.

- import: de EC modules solo funciona dentro de un modulo si no se usa el type=module no funciona

```javascript
<script type="module" src="/assets/index.js"></script>
```

## Closures

Son funciones que regresan una función o un objeto con funciones que mantienen las variables que fueron declaradas fuera de su scope.

Los closures nos sirven para tener algo parecido a variables privadas, característica que no tiene JavaScript por default. Es decir encapsulan variables que no pueden ser modificadas directamente por otros objetos, sólo por funciones pertenecientes al mismo.

- IIFE: *Immediately Invoked Function Expression*

    ```javascript
      (function() {
        let color = 'green';

        function printColor() {
          console.log(color);
        }

        printColor();
      })();
    ```

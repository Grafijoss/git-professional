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
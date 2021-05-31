## Generators

Los generadores son funciones especiales, pueden pausar su ejecución y luego volver al punto donde se quedaron recordando su scope.

### Algunas de sus características:

- Los generadores regresan una función.
- -  Cuando declaramos un generador en una variable el generador no se ejecuta queda suspendido hasta que lo invoquemos
- Empiezan suspendidos y se tiene que llamar next para que ejecuten.
- -  next() es una forma de decirle al generadioor que continue
```javascript 
function* simpleGenerator() {
    console.log('GENERATOR START');
    console.log('GENERATOR END');
}

const gen = simpleGenerator();
gen.next()

// console: GENERATOR START
// console: GENERATOR END
// exit: {value: undefined, done: true}

```

- Regresan un value y un boolean done que define si ya terminaron.
```javascript
// done regresa true si el generator termino su ejecución
{value: undefined, done: true}
```
- yield es la instrucción que regresa un valor cada vez que llamamos a next y detiene la ejecución del generador.
- -  yield nos regresa un valor en value que corresponde al yield actual
```javascript
// Los generadores son funciones de las que se puede salir y volver a entrar.
// Su contexto (asociación de variables) será conservado entre las reentradas.
// Cada vez que llamamos next, la ejecución del generador va a continuar hasta el proximo yield
function* simpleGenerator() {
    console.log('GENERATOR START');
    yield 1;
    // {value: 1, done: false}
    yield 2;
    // {value: 1, done: false}
    yield 3;
    // {value: 1, done: false}
    console.log('GENERATOR END');
    // {value: undefined, done: true}
}

// const gen = simpleGenerator();
```

## fibonacci
***

```javascript
// Ahora hagamos un ejemplo un poco más complejo: la secuencia fibonacci
      function* fibonacci() {
        // Los primeros numeros de la secuencia siempre son 1
        let a = 1; // 1, 1, 2, 3, 5, 8, 13, ...
        let b = 1; // 1, 2, 3, 5, 8, 13, 21, ... 
        while (true) {
          const nextNumber = a + b;
          a = b;
          b = nextNumber;
          yield nextNumber;
        }
      }

const gen = fibonacci()
```

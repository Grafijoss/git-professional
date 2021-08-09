## this
***

se refiere a un objeto. Ese objeto es el que actualmente está ejecutando un pedazo de código

### Globalscope
***

- Cuando estamos en el contexto global y no existe un objeto el contexto de this es window
- si llamamos a una funcion directamente javascript le asignara como referencia a window
- **use strict**: si usamos el use strict this no tiene referencia a menos que este dentro de un objeto
```
"use strict"
```
- si this se ejecuta dentro de un objeto, el objeto es el que ejecuta la función y this se refiere al objeto que actualmente esta ejecutando el pedazo de código
```javascript
const person = {
    name: 'Gabriel',
    saludar: function() {
        console.log(`Hola ${this.name}`)
    }
}
```
- si sacamos la funcion del objeto se va a perder el contexto y no tendrá acceso a las propiedades por que accion no se esta llamando dentro del contexto del objeto se esta llamando directamente
```javascript
const accion = person.saludar;
accion()
// Hola enabled
```
- dentro de una clase this es un objeto **this = {}** y funciona como un constructor al cual le podemos asignar propiedades
- - No s epuede asignar a this directamente pero si se puede asignarle propiedades
- - this se refiere a la instancia de la clase no a la clase
```javascript
function Person(name) {
    this.name = name
}
Person.prototype.saludar = function () {
    console.log(`Hola ${this.name}`)
}
const angela = new Person('Angela')
angela.saludar()
// Hola Angela
```


## call, apply, bind
***

this no se puede asignar directamente pero existen metodos que son parte de function que nos ayudan a establecer cual va a ser el contexto de this en la llamada de una funcion

### call
***

- en este caso no estamos dentro de un objeto ni tampoco una clase
- por medio de call podemos asignarle el this a la función
- le pasamos un objeto que va a ser el contexto de this como primer parametro
- **C**all: se separa por **C**omas

```javascript
function saludar() {
    console.log(`Hola ${this.name} ${this.apellido}`)
}

const richard = {
    nombre: 'Richard',
    apellido: 'Pazmiño'
}

saludar.apply(richard)
```
- si la funcion ya tiene parametros, enviamos el contexto de this como primer parametro

```javascript
function caminar(distancia, direccion) {
    console.log(`${this.name} camina ${distancia} metros hacia el ${direccion}`)
}

caminar(richard, 400, 'norte')
// Richard camina 400 metros hacia el norte
```

### apply
***

Es similar a call pero los parametros de la función se pasan dentro de una arreglo y se mandan a llamar la funcion inmediatamente

- ***A***pply: **A**rreglo
- la funcion se manda a llamar inmediatamente

```javascript
caminar(richard, [600, 'sur'])
// Richard camina 600 metros hacia el sur
```

### bind
***

No va a llamar la función directamente, si no que va a construir una nueva call y el this va a estar integrado


```javascript

const daniel = { name: 'Daniel', apellido: 'Sanchez'}
const danielSaluda = saludar.bind(daniel)
danielSaluda()

const danielCamina = caminar.bind(daniel);
danielCamina(1000, 'este')
// Daniel camina 1000 metros hacia el este

const danielCamina = caminar.bind(daniel, 100, 'sur')
danielCamina()
// Daniel camina 100 metros hacia el sur

```

- - curing: guardar argumentos parciales

```javascript

const danielCamina = caminar.bind(daniel, 2000)
danielCamina('oeste')
// Daniel camina 2000 metros hacia el oeste
```

> Ejemplo

```javascript

const buttons = document.getElementByClassName('vall-to-action')

Array.prototype.forEach.call(buttons, button => {
    button.onClick = () => alert('Nunca pares de aprender')
})
```
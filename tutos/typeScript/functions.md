## Functions
***

En typescript podemos definir los valore sque esperamos como argumentos y tambien que tipo de resultado esperamos que retorne la función

- Al igual que al declarar las variables en los argumentos con : le dicemos el tipo del argumento y despues de los argumentos con : le decimos cual es el tipo de salida de la funcion
````javascript
function add (a: number, b: number): number {
    return a + b
}
````

### Retornar una función
***

- Si queremos asignar un valor por defecto despues del tipo agregamos el valor con un =


- Si lo que queremos regresar es una funcion lo podemos hacer de la siguiente forma donde le indicamos que lo que esperamos que regrese es una funcion que a su vez regresa un number
````javascript
function createAdder (a: number): (number) => number{
    return function (b: number) {
        return a + b 
    }
}
````

### Parametros opcionales
***

- Si queremos asignar un valor por defecto despues del tipo agregamos el valor con un =

- Cuando un parametro es opcionalantes de los : agregamos un ? que significa que el parametro es opcional y puede ser undefined

````javascript
function fullName (firstName: string, lastName?: string): string {
    return `${firstName} ${lastName}` 
}
````

### Parametros por defecto
***

- Si queremos asignar un valor por defecto despues del tipo agregamos el valor con un =

````javascript
function fullName (firstName: string = 'Jose', lastName?: string): string {
    return `${firstName} ${lastName}` 
}
````


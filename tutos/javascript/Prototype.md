
## Prototype
***

Los prototipos son un mecanismo mediante el cual los objetos en JavaScript heredan características entre s


- Object.create() : El método Object.create() crea un objeto nuevo, utilizando un objeto existente como el prototipo del nuevo objeto creado.
- Todas las funciones tienen un objeto ptototype
- - Inicialmente prototype es un objeto vacio solo tiene un contructor
- - Como es un objeto el podemos añadir prpiedades
- - Cuando usamos la palabra reservada **new** estamos usando azucar sintactica para el **Object.create(object)**

En javascript todos son objetos

## Herencia prototipal
***

- Object es el punto de partida de todos los objetos en javascript
- Dentro de proto encopntramos las propiedades heredades de otro prototype
- -  Dentro de proto pomos encontrar otro objeto proto hasta llegar a object

### Propiedades
***

- object.hasOwnProperty: Sirve para evaluar si una propiedad le pertenece directamente al objeto o llega por herencia
- object.getPropertyOf(): Es la forma correcta de regresar una propiedad desde proto
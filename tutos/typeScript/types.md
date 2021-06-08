## Types
***

````javascript
    let numerador: number = 5
````

Cuando declaramos una variable le podemos asignar un tipo se llama una **variable denotada**


### Arrays

````javascript
    let brothers: String[] = []
````

En javascript le podemos asignar a un array cualquier tipo de información pero con javascript le podemos especificar de que tipo de datos va a ser el arreglo

- Si queremos que un arreglo acepte mas d eun tipo lo podemos hacer de la siguiente forma:
````javascript
    let stringsAndNumbers: Array< string | number> = []
````
- -  dentro del <> vamos a listar los tipos se parados por el pipe |


### Enum
***

Es un conjunto de valores estrictos, solo s epueden usar los valores que se definen, una variable que esta denotada que un tipo de enum no puede usar otro tipo

- El enum se define como un objeto pero los valores se asignan a los campos con = en luhgar de :
- Los campos no se llaman directamente, se llaman a travez del on bjeto padre
- -  Color.verde

### Any
***

Si no sabemos de que tipo va a ser una variable la podemos denotar con el tipo any y de esta forma podemos asignarle o reasignarle cualquier tipo de elemento
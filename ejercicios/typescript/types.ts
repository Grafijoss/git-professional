
// boolean
let muted: boolean = true; 

// numbers
let numerador: number = 5
let demoninador: number = 6
let resultadp: number = numerador + demoninador

// string
const Name: String = 'Joss'
let saludo: string = `Hola ${Name}`

// Arrays
let brothers: String[] = []
brothers = ['Juli', 'Juan', 'Jose', 'Jorge']

// brothers.push(5) ERROR

let numbersAndStrings : Array<number | string> = [];
numbersAndStrings.push('string')
numbersAndStrings.push(10)

// Enum

enum Color {
    Rojo = 'rojo',
    Verde = 'verde',
    Azul = 'azul'
}

let colorFavorito: Color = Color.Rojo

console.log(`Mi color favorito es ${colorFavorito}`)

// Any

let comodin: any = 'Joker'
comodin = 10

// Object

let objeto: object = { type: 'object'}
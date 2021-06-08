function add (a: number, b: number): number {
    return a + b
}

const sum = add(6, 4) // 10

// funciones que regresan otras funciones

function createAdder (a: number): (number) => number{
    return function (b: number) {
        return a + b 
    }
}

const addFour = createAdder(4)
const addSix = addFour(6) 

console.log(addFour(6)) // 10

// parametros opcionales

function fullName (firstName: string, lastName?: string): string {
    return `${firstName} ${lastName}` 
}

const Jose = fullName('Joss')
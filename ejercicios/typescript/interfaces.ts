

enum colorRectangulo {
    Rojo = 'Rojo',
    Verde = 'Verde'
}

interface Rectangulo {
    color?: colorRectangulo,
    height: number,
    width: number,
}

let rect: Rectangulo = {
    color: colorRectangulo.Verde,
    height:50,
    width: 200,
}

function area (r: Rectangulo): number {
    return r.height * r.width
}

const areaRect = area (rect) 
console.log(areaRect) // 100000

rect.toString = function () {
    return this.color 
    ? `Un rectangulo ${this.color}`
    : 'Un rectangulo'
}

console.log(rect.toString())
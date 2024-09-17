// shapeModule.js
class Shape {
    #color;

    constructor(color) {
        this.#color = color;
    }

    get Color() {
        return this.#color;
    }

    set Color(newColor) {
        this.#color = newColor;
    }

    DrawShape() {
        console.log(`Shape color is: ${this.Color}`);
    }
}

export { Shape };

class Shape {

    #name;
    #side;
    #sideLength;
    constructor(name, side, sideLength) {
        this.#name = name;
        this.#side = side;
        this.#sideLength = sideLength;
    }
    getName() {
        return this.#name;
    }
    getSide() {
        return this.#side;
    }
    getSideLength() {
        return this.#sideLength;
    }
    calcPerimeter() {
        let perimeter = this.#side * this.#sideLength;
        console.log("Calculated Perimeter is : ", perimeter);
    }

}

let square = new Shape("Square", 4, 5);
console.log("Shape is ", square.getName());
square.calcPerimeter();

let triangle = new Shape("triangle", 3, 3);
console.log("Shape is ", triangle.getName());
triangle.calcPerimeter();


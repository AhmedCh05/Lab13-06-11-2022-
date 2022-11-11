class Car {
    #name;
    #make;
    #Color;
    #Speed;

    constructor(name, make, speed, color) {
        this.#name = name;
        this.#make = make;
        this.#Speed = speed;
        this.#Color = color;
    }
    setName(name) {
        this.#name = name;
        return this;
    }
    setMake(Make) {
        this.#make = Make;
        return this;
    }
    setcolor(Color) {
        this.#Color = Color;
        return this;
    }
    setSpeed(speed) {
        this.#Speed = speed;
        return this;
    }
    getName() {
        return this.#name;
    }
    getMake() {
        return this.#make;
    }
    getcolor() {
        return this.#Color;
    }
    getSpeed() {
        return this.#Speed;
    }

    DisplayVal() {
        console.log("\n************************\nCar name : ", this.getName(), "\nCar make : ", this.getMake(), "\nCar Color : ", this.getcolor(), "\nCar Speed : ", this.getSpeed(), "\n*******************************\n");
    }
}


let MyCar = new Car

MyCar.setName("Civic").setMake("Honda").setSpeed(98.9).setcolor("Jet Black").DisplayVal();
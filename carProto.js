/**
 * Car class
 * @constructor
 * @param {String} model
 */
class Car {
    constructor(model) {
        this.model = model;
        this.currentSpeed = 0;
    }

    accelerate() {
        this.currentSpeed++;
    }

    brake() {
        this.currentSpeed--;
    }

    toString() {
        return `${this.model} is going ${this.currentSpeed}`;
    }
}

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
const geo = new Car('Geo');
geo.accelerate();
geo.accelerate();
geo.brake();
console.log(geo.toString());

/**
 * ElectricCar class
 * @constructor
 * @param {String} model
 */
class ElectricCar extends Car {
    constructor(model) {
        super(model);
        this.motor = 'electric';
    }

    accelerate() {
        super.accelerate();
        super.accelerate();
    }

    toString() {
        return super.toString() + ` and has an ${this.motor} motor`;
    }
}
//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
const prius = new ElectricCar('Prius');
prius.accelerate();
prius.accelerate();
prius.brake();
console.log(prius.toString());
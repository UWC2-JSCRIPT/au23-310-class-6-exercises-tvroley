/**
 * Car class
 * @constructor
 * @param {String} model
 */
class Car {
    constructor(model) {
        this.model = model;
        this.currentSpeed = 0;

        this.accelerate = () => {
            this.currentSpeed++;
        }

        this.brake = () => {
            this.currentSpeed--;
        }
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

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()

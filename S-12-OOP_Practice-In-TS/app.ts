export{}
class Car {
    name: string;
    model: string;
    weight: string;
    color: string;
    constructor(name: string, model: string, weight: string, color: string) {
        this.name = name;
        this.model = model;
        this.weight = weight;
        this.color = color;
    }
    start(): void {
        console.log("start");
    }
    drive(): void {
        console.log("Drive");
    }
    break(): void {
     console.log("Break");
    }
    stop(): void {
        console.log("Stop");
    }
}
const car1 = new Car("I20", "2020", "500KG", "White");
console.log(car1);
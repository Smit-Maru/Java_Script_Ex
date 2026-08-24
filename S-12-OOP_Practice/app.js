class Car {
  constructor(name,model,weight,color){
    this.name=name;
    this.model=model;
    this.weight=weight;
    this.color=color;
  }

  start(){
    console.log("start");
  }

  drive(){
    console.log("Drive");
  }

  break(){
    console.log("Break");
  }

  stop(){
    console.log("Stop");
  }
}

const car1 = new Car("I20","2020","500KG","White");
console.log(car1);
class WebDev{
  name : string;
  experience:number; 

  constructor(name : string ,experience : number){
    this.name = name,
    this.experience = experience
  }

  showDetails() : void{
    console.log(`Name: ${this.name}`);
    console.log(`Experience: ${this.experience} years`);
  }
}

class Frontend extends WebDev{
  printLanguage() : void{
    console.log("JS");
  }
  
  createUI() : void{
    console.log("Creating user interface...");
  }
}

class BackEnd extends WebDev{
  printLanguage() : void{
    console.log(".NET");
  }

  createAPI() : void{
    console.log("Creating backend API...");
  }
}

const frontend = new Frontend("Smit",2);
frontend.showDetails();
frontend.printLanguage();
frontend.createUI();

const backend = new BackEnd("Smit 2",3);
backend.showDetails();
backend.printLanguage();
backend.createAPI()
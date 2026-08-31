"use strict";
class WebDev {
    name;
    experience;
    constructor(name, experience) {
        this.name = name,
            this.experience = experience;
    }
    showDetails() {
        console.log(`Name: ${this.name}`);
        console.log(`Experience: ${this.experience} years`);
    }
}
class Frontend extends WebDev {
    printLanguage() {
        console.log("JS");
    }
    createUI() {
        console.log("Creating user interface...");
    }
}
class BackEnd extends WebDev {
    printLanguage() {
        console.log(".NET");
    }
    createAPI() {
        console.log("Creating backend API...");
    }
}
const frontend = new Frontend("Smit", 2);
frontend.showDetails();
frontend.printLanguage();
frontend.createUI();
const backend = new BackEnd("Smit 2", 3);
backend.showDetails();
backend.printLanguage();
backend.createAPI();

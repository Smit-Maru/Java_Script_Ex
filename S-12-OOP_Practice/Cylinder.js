class Cylinder {
  constructor(r,h){
    this.r=r;
    this.h=h;
  }

  area(){
    return 3.14*this.r*this.r*this.h;
  }
}

const c1 = new Cylinder(10,10);
const ans = c1.area();
console.log(ans);
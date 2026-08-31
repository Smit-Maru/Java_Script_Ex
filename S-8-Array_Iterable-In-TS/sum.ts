export{};

let arr:number[] = [1,6,17,70,85]
const ans : number = arr.reduce((sum,next) => {
    return sum+next;
  })
console.log(ans);
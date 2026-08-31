const inp = document.getElementById('val') as HTMLInputElement;
const btn = document.getElementById('btn') as HTMLButtonElement;

const arr:number[] = [];
function addElement(number:number){
  let n : number = number
  if(!arr.includes(n)){
    arr.push(n);
  }
  console.log(arr);
}

btn.addEventListener('click',()=>{
  const numberValue:number = Number(inp.value);
  addElement(numberValue)
})
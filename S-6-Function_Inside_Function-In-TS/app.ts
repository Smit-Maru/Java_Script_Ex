function cal():void{
  function sum(inputnum : number) : number{
    console.log(inputnum);

    const re : number = inputnum * inputnum;
    
    return re;
  }

  const n = document.getElementById('num') as HTMLInputElement;
  
  const numberValue : number = Number(n.value)
  
  console.log(sum(numberValue));
}

//use of ternory operator
function ternery() : void{
  const userName : string = 'smit';
  const ans = userName ? 'name exist' : "name not exist";
  console.log(ans);
  
}
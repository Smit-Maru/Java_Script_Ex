const btn = document.getElementById('btn');
const inputnum = document.getElementById('num');

function calculate(){
  function sum(inputnum){
    console.log(inputnum)
    return inputnum*inputnum;
  }
  console.log(sum(inputnum.value))
}

btn.addEventListener('click',calculate)

//use of ternory operator
const name = 'smit';
const ans = name == true ? console.log('name exist') : console.log("name not exist");
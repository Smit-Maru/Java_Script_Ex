const inp = document.getElementById('val');
const btn = document.getElementById('btn');

const arr = [];
function addElement(number,event){
  let n = number.value;
  if(!arr.includes(n)){
    arr.push(n)
  }
  console.log(arr);
}

btn.addEventListener('click',addElement.bind(null,inp))
const btn = document.getElementById('btn');
const divv = document.querySelector('div p:first-child');
const colorBtn = document.getElementById('color')

// open in new tab
btn.addEventListener('click',()=>{window.open("https://www.google.com","_blank")})

// open in same tab
// btn.addEventListener('click',()=>{window.open("https://www.google.com","_self")})

colorBtn.addEventListener('click',()=>{
  divv.style.backgroundColor = 'red';
})
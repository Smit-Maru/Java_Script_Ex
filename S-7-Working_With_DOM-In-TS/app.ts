const btn = document.getElementById('btn') as HTMLButtonElement;
const color = document.getElementById('color') as HTMLButtonElement;
const divv = document.querySelector('div p:first-child') as HTMLDivElement;

btn.addEventListener('click',()=>{window.open("https://www.google.com","_blank")})

// open in the self tab
// btn.addEventListener('click',()=>{window.open("https://www.google.com","_self")})

color.addEventListener('click',()=>{
  divv.style.backgroundColor = 'red';
})
const button = document.getElementById('loadBtn');
const result = document.getElementById('result');

console.log("Application Started.");

button.addEventListener('click',async ()=>{
  console.log("Button click");

  const calculator = await import("./calculator.js");
  
  console.log("Calculator module loaded");

  const addition = calculator.add(10,20);
  const subtraction  = calculator.sub(10,20);

  result.innerHTML = `
    Addition: ${addition}<br>
    Subtraction: ${subtraction} 
  `;
})

function cal(operation: string): void {
  const num1: number = Number(
    (document.getElementById('n1') as HTMLInputElement).value
  );
  
  const num2: number = Number(
    (document.getElementById('n2') as HTMLInputElement).value
  );
  
  const resultEle: HTMLElement = document.getElementById('result') as HTMLElement;
  
  switch (operation) {
    case 'add':
      resultEle.innerHTML = String(num1 + num2);
      break;
    case 'sub':
      resultEle.innerHTML = String(num1 - num2);
      break;
    case 'mul':
      resultEle.innerHTML = String(num1 * num2);
      break;
    case 'div':
      if(num2 === 0){
        alert("This devision is not possible add other number for the denominator.")
      } else {
        resultEle.innerHTML = String(num1 / num2);
      }
      break;
  }
}
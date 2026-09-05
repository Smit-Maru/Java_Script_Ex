const button = document.getElementById('loadBtn') as HTMLButtonElement;
const result = document.getElementById('result') as HTMLParagraphElement;
console.log("Application Started.");
button.addEventListener('click', async (): Promise<void> => {
    console.log("Button click");
    const calculator = await import("./calculator.js");
    console.log("Calculator module loaded");
    const addition: number = calculator.add(10, 20);
    const subtraction: number = calculator.sub(10, 20);
    result.innerHTML = `
        Addition: ${addition}<br>
        Subtraction: ${subtraction}
    `;
});
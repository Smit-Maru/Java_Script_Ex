const inp1 = document.getElementById('inp1') as HTMLInputElement;
const inp2 = document.getElementById('inp2') as HTMLInputElement;

const addBtn = document.getElementById('add') as HTMLButtonElement;
const subBtn = document.getElementById('sub') as HTMLButtonElement;
const mulBtn = document.getElementById('mul') as HTMLButtonElement;
const divBtn = document.getElementById('div') as HTMLButtonElement;

const p = document.getElementById('p') as HTMLParagraphElement;

addBtn.addEventListener('click', (): void => {
    const a: number = Number(inp1.value);
    const b: number = Number(inp2.value);
    p.textContent = String(a + b);
});

subBtn.addEventListener('click', (): void => {
    const a: number = Number(inp1.value);
    const b: number = Number(inp2.value);
    p.textContent = String(a - b);
});

mulBtn.addEventListener('click', (): void => {
    const a: number = Number(inp1.value);
    const b: number = Number(inp2.value);
    p.textContent = String(a * b);
});

divBtn.addEventListener('click', (): void => {
    const a: number = Number(inp1.value);
    const b: number = Number(inp2.value);
    if (b !== 0) {
        p.textContent = String(a / b);
    } else {
        p.textContent = "Cannot divide by zero";
    }
});
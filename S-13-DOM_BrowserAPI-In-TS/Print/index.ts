export{}
const printBtn = document.getElementById('print') as HTMLButtonElement;
const loadBtn = document.getElementById('load') as HTMLButtonElement;

printBtn.addEventListener('click', function (): void {
    window.print();
});

loadBtn.addEventListener('click', function (): void {
    const script = document.createElement('script') as HTMLScriptElement;
    script.src = './second.js';
    document.body.appendChild(script);
});
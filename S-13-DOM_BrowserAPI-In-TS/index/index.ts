export{}
const btn = document.getElementById('btn') as HTMLButtonElement;

btn.addEventListener('click', function (): void {

    const p: HTMLParagraphElement = document.createElement('p');

    p.textContent = "Hello";

    document.body.append(p);
});

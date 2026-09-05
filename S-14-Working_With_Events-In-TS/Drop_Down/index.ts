const select = document.getElementById('language') as HTMLSelectElement;

select.addEventListener('change', (): void => {
    alert(`Selected language is ${select.value}`);
});
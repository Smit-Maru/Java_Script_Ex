const ip = document.getElementById('ip') as HTMLInputElement;

ip.addEventListener('blur', (): void => {

    ip.value = ip.value.toUpperCase();

});
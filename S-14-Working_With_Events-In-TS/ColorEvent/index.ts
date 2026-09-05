const input = document.getElementById("text") as HTMLInputElement;

input.addEventListener("keydown", function (): void {
    input.style.backgroundColor = "red";
});

input.addEventListener("keyup", function (): void {
    input.style.backgroundColor = "green";
});
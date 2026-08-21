const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".buttons button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value === "C") {
            display.value = "";
        } else if (value === "←") {
            display.value = display.value.slice(0, -1);
        } else if (value === "=") {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = "Check Expression there is error.";
            }
        } else {
            display.value += value;
        }
    });
}); 
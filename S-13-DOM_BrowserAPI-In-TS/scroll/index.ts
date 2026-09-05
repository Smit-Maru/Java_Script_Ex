const scrollToBtn = document.getElementById("scrollTo") as HTMLButtonElement;

const scrollByBtn = document.getElementById("scrollBy") as HTMLButtonElement;

const outer = document.getElementById("outer") as HTMLDivElement;


// Scroll to a specific position
scrollToBtn.addEventListener("click", function (): void {

    outer.scrollTo({
        top: 200,
        left: 500,
        behavior: "smooth"
    });

});


// Scroll relative to current position
scrollByBtn.addEventListener("click", function (): void {

    outer.scrollBy({
        top: 50,
        left: 100,
        behavior: "smooth"
    });

});
const userName: string = "ABC";

if (typeof userName === "string") {
    console.log(userName);
}

function getName(name: string): string {
    const demo: number = 10;
    const demo2: number = 20;

    console.log(demo);
    console.log(demo2);

    return name;
}

const result: string = getName("Smit");

console.log(result);
export{}
function reverse(str: string): string {
    let rev: string = "";
    for (let i: number = str.length - 1; i >= 0; i--) {
        rev += str[i];
    }
    return rev;
}
const ans: string = reverse("Smit");
console.log(ans);
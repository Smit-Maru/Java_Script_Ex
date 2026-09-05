function reverse(str) {
    let rev = "";
    for (let i = str.length - 1; i >= 0; i--) {
        rev += str[i];
    }
    return rev;
}
const ans = reverse("Smit");
console.log(ans);
export {};

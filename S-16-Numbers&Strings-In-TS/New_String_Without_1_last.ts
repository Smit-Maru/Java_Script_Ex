export{}
function NewStr(str: string): string {
    let newStr: string = "";
    for (let i: number = str.length - 2; i >= 1; i--) {
        newStr += str[i];
    }
    return newStr;
}
const ans: string = NewStr("Smit");
console.log(ans);
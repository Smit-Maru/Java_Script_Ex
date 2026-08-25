function NewStr(str){
  var newStr = "";
  for(let i=str.length - 2 ; i>=1 ; i--){
    newStr += str[i];
  }
  return newStr;
}

const ans = NewStr("Smit")
console.log(ans);


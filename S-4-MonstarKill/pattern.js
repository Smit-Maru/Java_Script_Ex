const readline = require("readline-sync");

const row = Number(readline.question("Enter Row: "));
const col = Number(readline.question("Enter Col: "));

let flag = false;
let count = 0;

for(let i=0 ; i<row ; i++){
  if(i % 3 == 0){
    if(flag){
      flag = false;
      count++;
    }
    else{
      flag=true;
    }
  }
  if(flag == true){
    let str = "";
    for(let j=0 ; j<col ; j++){
      str+="0";
    }
    console.log(str);
  } else {

    let str = "";
    if(count % 3 == 1){
      for(let j=0 ; j<col/3 ; j++){
        str += "0";
      }
      console.log(str);
    }

    str = "";
    if(count % 3 == 2){
      for(let j=0 ; j<col/3 ; j++){
        str += " ";
      }
      for(let j=col/3 ; j<=((col/3)*2) ; j++){
        str += "0"
      }
      console.log(str);
    }

    str="";
    if(count%3 == 0){
      for(let j=0 ; j<col/3 ; j++){
        str += " ";
      }
      for(let j=col/3 ; j<=((col/3)*2) ; j++){
        str += " "
      }
      for(let j=((col/3)*2) ; j<=col ; j++){
        str += "0"
      }
      console.log(str);
    }
  }
}
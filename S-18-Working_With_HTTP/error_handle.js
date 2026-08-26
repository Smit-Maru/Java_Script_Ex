function Div(a,b){
  try{
    if(b === 0){
      throw new Error("Can not devide by zero.")
    }
    var ans = a/b;
    console.log(ans);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

Div(10, 0);
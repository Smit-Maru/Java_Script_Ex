
function findMAx(...number){
  const ans = number.reduce((sum,next) => {
    return sum+next;
  })
  console.log(ans);
}

findMAx(10,20,30,40,50,60,70,80,90,100)
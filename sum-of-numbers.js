function getSum( a,b ){
    let range = []
    if(a < b){
      for(let i = a; i <= b; i++){
        range.push(i)
      }
    } else {
      for(let i = b; i <= a; i++){
        range.push(i)
      }
    }
    return range.reduce((a,b) => {
     return a+b
    }, 0)
}
  
  getSum(0,-1) //-1);
  getSum(0,1) //1);
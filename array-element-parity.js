function solve(arr){
    let newArr = [...new Set(arr)]
    let sum = 0;
    for(let i = 0; i < newArr.length; i++){
      sum = sum + newArr[i]
  }
   return sum
}
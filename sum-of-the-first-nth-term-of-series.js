function SeriesSum(n){
    let s = 1;
   let sum = 1;
   let arr = []
   if(n === 0) return '0.00'
   while ( s < n ){
      s++;
      sum += 3;
      arr.push(sum)
   }
   let res = 0
   for(let i = 0; i < arr.length; i++){
     res += 1/arr[i]
   }
   return (1 + res).toFixed(2)
 }
 
 SeriesSum(1)//, "1.00")
 SeriesSum(2)//, "1.25")
 SeriesSum(3)//, "1.39")
 SeriesSum(4)//, "1.49")
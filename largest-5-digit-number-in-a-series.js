function solution(digits){
    let arr = digits.toString().split('')
    let arr1 =[]
    for(let i = 0; i < arr.length; i++){
      arr1.push(+arr[i])
    }
    let sum = 0;
    let result
    while(+arr1.slice(0,5).join('') > sum){
      sum = +arr1.slice(0,5).join('')
      if(arr1.length > 5) arr1.shift()
    }
    return +arr1.join('')
  }
  
solution(1234567890) //67890;
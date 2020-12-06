function squareDigits(num){
    let a = num.toString().split('');
    let arr = [];
    for(let i = 0; i < a.length; i++){
      arr.push(a[i]**2)
    }
    return +arr.join('')
}
  
squareDigits(9119) // 811181);
  
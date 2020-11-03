function evenOrOdd(str) {
    let num = str.split('')
    let even = 0;
    let odd = 0;
    for(let i = 0; i < num.length; i++){
      if(num[i] % 2 === 0) even += Number(num[i])
      if(num[i] % 2 !== 0) odd += Number(num[i])
    }
    if(even > odd) return 'Even is greater than Odd'
    if(even < odd) return 'Odd is greater than Even'
    else return 'Even and Odd are the same'
}
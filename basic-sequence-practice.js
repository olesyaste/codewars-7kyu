function sumOfN(n) {
    let ar = [0]
    for(let i = 1; i <= Math.abs(n); i++){
      if(n > 0){
        ar.push(i + ar[ar.length - 1])
      } else {
        i = -i
        ar.push(ar[ar.length - 1] + i)
        i = Math.abs(i);
      }
    }
    return ar
}
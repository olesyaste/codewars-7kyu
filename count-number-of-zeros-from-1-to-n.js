function countZeros(n) {
    let str = ''
    for (let i = 9; i <= n; i++){
      str += i.toString();
    }
    return str.split('0').length -1
}
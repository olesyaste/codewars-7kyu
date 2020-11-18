function solve(str,k){
    let arr = []
    for (let i = 0; i < str.length; i++){
      arr.push(str.slice(i, i + (str.length - k)))
    }
    return Math.max(...arr)
}
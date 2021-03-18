function dontGiveMeFive(start, end){
    let a = []
    for (let i = start; i <= end; i++){
      if(!i.toString().includes('5')) a.push(i)
    }
    return a.length
}
  
  dontGiveMeFive(1,9)// 8)
  dontGiveMeFive(4,17)// 12)
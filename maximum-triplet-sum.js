function maxTriSum(numbers){
    let unique = [...new Set(numbers.sort((a, b) => {
      return b-a
    }))]
    return unique.slice(0,3).reduce((a,b) => {
      return a + b
    })
}
function solution(str, ending){
    if(str === '' || ending === '') return true
    let a = str.slice(-ending.length)
    if(a === ending){
      return true
    }
    return false
  }
  
  solution('sumo', 'omo')// false
  solution('samurai', 'ai')//true
  solution('abcde', 'cde')// true)
  solution('abcde', 'abc')// false)
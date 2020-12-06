function validSpacing(s) {
    let splitted = s.split(' ')
    let result;
    if(s === ''){
      return true
    } else {
  for(let i = 0; i < splitted.length; i++){
    if(splitted[i] === '') return false
    if(splitted[i] === '' || splitted[0] === '' || splitted[splitted.length-1] === ''){
      result = false
    } else {
     result = true
   }
    }
  }
    return result
  }
  
  
  validSpacing('Hello world') //= true
  validSpacing(' Hello world') //= false
  validSpacing('Hello world  ') //= false
  validSpacing('Hello  world') //= false
  validSpacing('Hello') //= true
  // Even though there are no spaces, it is still valid because none are needed
  validSpacing('Helloworld') //= true 
  // true because we are not checking for the validity of words.
  validSpacing('Helloworld ') //= false
  validSpacing(' ') //= false
  validSpacing('')// = true
  
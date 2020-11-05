function capital(capitals){
    let ar = []
    for(let i = 0; i<capitals.length; i++){
      if('state' in capitals[i]){
        ar.push(`The capital of ${capitals[i].state} is ${capitals[i].capital}`)
      } else {
        ar.push(`The capital of ${capitals[i].country} is ${capitals[i].capital}`) 
      }
    }
    return ar
}
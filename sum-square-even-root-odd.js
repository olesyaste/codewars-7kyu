const sumSquareEvenRootOdd = ns => {
    let squareRoot = [];
    for(let i = 0; i < ns.length; i++){
      if(ns[i] % 2 === 0) {
        squareRoot.push(Math.pow(ns[i], 2))
      } else {
        squareRoot.push(Math.pow(ns[i], 1/2))
      }
    }
    return +(squareRoot.reduce((a,b) => {
      return a+b
    })).toFixed(2)
  };
  
  
  sumSquareEvenRootOdd([4,5,7,8,1,2,3,0])
  //91.61);
  sumSquareEvenRootOdd([1,14,9,8,17,21])
  //272.71);
//first solution
function solve(s) {
    return 'abcdefghijklmnopqrstuvwxyz'.includes([...s].sort().join(''));
}

//second solution
function solve(s){
    const alphabet = `abcdefghijklmnopqrstuvwxyz`;
    let ar = [];
    for(let z in alphabet){
      let charToCheck = alphabet[z];
      for(let i in s){
        if(charToCheck === s[i]){
          ar.push(s[i]); 
        }
        if(ar.length === s.length){ break; }
      }
      if(ar.length === s.length){ break; }
    }
    let orderedString = ar.join(``);
    let length = orderedString.length;
    let startChar = orderedString.charAt(0);
    let startIndex = alphabet.indexOf(startChar);
    let subString = alphabet.substr(startIndex, length);
  
    return subString == orderedString ? true: false;
}

  solve("abc")
  //true);
  solve("abd")
  //false);
  solve("dabc")
  //true);
  solve("abbc")
  //false);
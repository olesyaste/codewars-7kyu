function printerError(s) {
    let colors =  'abcdefghijklm';
    let err = [];
    for (let i = 0; i < s.length; i++){
      if(colors.indexOf(s[i]) === -1){
        err.push(s[i])
      };
    };
    return `${err.length}/${s.length}`
}
  
  printerError("kkkwwwaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz")//"3/56");
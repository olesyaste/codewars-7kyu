const removeConsecutiveDuplicates = (s) => {
    let n = s.split(' ')
    let ar = [];
    for(let i = 0; i < n.length; i++){
      if(n[i] !== n[i + 1]){
        ar.push(n[i])
      }
    }
    return ar.join(' ')
}

removeConsecutiveDuplicates('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta');
//'alpha beta gamma delta alpha beta gamma delta');
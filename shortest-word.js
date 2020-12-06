function findShort(s){
    let a = s.split(' ')
    let smallest = 100;
    for(let i = 0; i < a.length; i++){
      if(a[i].length < smallest){
        smallest = a[i].length
      }
    }
    return smallest
}
  
  findShort("bitcoin take over the world maybe who knows perhaps") 
  // 3);
  findShort("turns out random test cases are easier than writing out basic ones")
  // 3); 
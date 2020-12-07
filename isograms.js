function isIsogram(str){
    let s = str.toLowerCase().split('');
    let repeated = s.filter((item, index) => s.indexOf(item) != index);
    if (repeated.length > 0) return false;
    return true;
}
  
isIsogram("Dermatoglyphics") // true
isIsogram("aba") // false
isIsogram("moOse") // false
function XO(str) {
    let x = str.toLowerCase().split('x').length-1
    let o = str.toLowerCase().split('o').length-1
    if(x === o){
      return true
    }
  return false
}

XO('xo') //true);
XO("xxOo") //true);
XO("xxxm") //false);
XO("Oo") //false);
XO("ooom") //false);
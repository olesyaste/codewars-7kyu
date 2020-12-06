function getMiddle(s){
    if(s.length % 2 === 0) return s.substr(s.length / 2 -1, 2);
    return s.substr(s.length / 2, 1);
}
  
  getMiddle("test") //"es");
  getMiddle("testing") //"t");
  getMiddle("middle") //"dd");
  getMiddle("A") //"A");
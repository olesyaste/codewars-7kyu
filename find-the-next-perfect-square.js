function findNextSquare(sq) {
    if(Math.sqrt(sq) === Math.floor(Math.sqrt(sq))) return (Math.sqrt(sq)+1) * (Math.sqrt(sq)+1);
    return -1
}
  
  findNextSquare(121)//, 144, "Wrong output for 121");
  findNextSquare(625)//, 676, "Wrong output for 625");
  findNextSquare(319225)//, 320356, "Wrong output for 319225");
  findNextSquare(155)//, -1, "Wrong output for 155");
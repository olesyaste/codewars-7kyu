const isSquare = function(n){
    return n >= 0 && Math.sqrt(n) % 1 === 0;
}
  
  isSquare(-1) // false, "-1: Negative numbers cannot be square numbers");
  isSquare( 0) // true, "0 is a square number (0 * 0)");
  isSquare( 3) // false, "3 is not a square number");
  isSquare( 4) // true, "4 is a square number (2 * 2)");
  isSquare(25) // true, "25 is a square number (5 * 5)");
  isSquare(26) // false, "26 is not a square number");
function divisors(integer) {
    let ar = [];
    for(let i = 2; i < integer; i++){
      if(integer / i === Math.floor(integer / i)) ar.push(i);
    };
    if(ar.length > 0) return ar;
   return  `${integer} is prime`;
};

divisors(15)//, [3, 5]);
divisors(12)//, [2, 3, 4, 6]);
divisors(13)//, "13 is prime");
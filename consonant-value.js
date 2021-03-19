function solve(s) {
    let sum = 0, max = 0
    for (let char of s) {
      if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') sum = 0
        else  sum += char.charCodeAt(0) - 96
      if (sum > max) max = sum
    }        
    return max;
};

solve("zodiac")//,26);
solve("chruschtschov")//,80);
solve("khrushchev")//,38);
solve("strength")//,57);
solve("catchphrase")//,73);
solve("twelfthstreet")//,103);
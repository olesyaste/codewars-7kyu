function reverseWords(str) {
    let a = str.split(' ');
    return a.map(el => el.split("").reverse().join("")).join(' ')
}
  
reverseWords('The quick brown fox jumps over the lazy dog.')// 'ehT kciuq nworb xof spmuj revo eht yzal .god');‚
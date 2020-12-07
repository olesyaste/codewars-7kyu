function disemvowel(string) {
    let vowels = 'AEIOUaeiou'.split('');
    let result = '';
    for (let i = 0; i < string.length; i += 1) {
      let char = string[i];
      if (vowels.indexOf(char) === -1) {
        result += char;
      }
    }
    return result;
}
  
disemvowel("This website is for losers LOL!") //"Ths wbst s fr lsrs LL!")
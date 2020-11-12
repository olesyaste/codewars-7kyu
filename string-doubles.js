function doubles(s){
    const arr = [];
     for (let char of s) {
       if (arr.length !== 0 && arr[arr.length - 1] === char)
         arr.pop();
       else
         arr.push(char);
     }
     return arr.join('');
}
   
   doubles('abbbzz');
   //'ab')
   doubles('zzzzykkkd');
   //'ykd')
   doubles('abbcccdddda');
   //'aca')
   doubles('vvvvvoiiiiin');
   //'voin')
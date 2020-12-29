function openOrSenior(data){
    return data.map(mem => {
      if(mem[0] < 55 || mem[1] <= 7) return mem = 'Open';
      return mem ='Senior';
    });
}

openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]])//,['Open', 'Senior', 'Open', 'Senior']);
openOrSenior([[3, 12],[55,1],[91, -2],[54, 23]])//,['Open', 'Open', 'Open', 'Open']);
openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]])//,['Senior', 'Open', 'Open', 'Open']);
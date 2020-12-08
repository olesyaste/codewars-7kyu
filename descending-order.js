function descendingOrder(n){
    let ar = n.toString().split('');
    let rev = ar.sort((a,b) => {
      return b-a
    }).join('');
    return parseInt(rev);
}
  
descendingOrder(123456789) // 987654321)
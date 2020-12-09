String.prototype.toJadenCase = function () {
    let ar = this.split(' ')
    let newAr = []
    for(let i = 0; i < ar.length; i++){
      newAr.push(`${ar[i].substring(0,1).toUpperCase()}` + `${ar[i].substring(1, this.length)}`)
    }
    return newAr.join(' ')
};
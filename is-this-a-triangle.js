function isTriangle(a,b,c){
    if(a+b > c && a+c > b && b+c > a) return true
    return false
}

isTriangle(1,2,2)// true
isTriangle(7,2,2)// false
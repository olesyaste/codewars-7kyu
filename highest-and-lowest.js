function highAndLow(numbers){
    let numAr = numbers.split(' ');
    let sorted = numAr.sort((a,b) => {return a-b});
    return `${sorted[sorted.length-1]} ${sorted[0]}`;
}

highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6") // "542 -214");
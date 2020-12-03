function sharedBits(a, b) {
    let aArray = a.toString(2).split("").reverse();
  console.log(aArray)
    let bArray = b.toString(2).split("").reverse();
    console.log(bArray)
    let sharedBitNum = 0;
    aArray.forEach((x, i) => {
        if (x === "1" && bArray[i] === "1") {
            sharedBitNum += 1;
        }
    })
    return sharedBitNum > 1;
}

//sharedBits(3072, 1536) //false
//sharedBits(54280, 8520) //false
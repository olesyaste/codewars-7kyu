function adjacentElementsProduct(array) {
    let newArr = []
    for(i = 0; i < array.length-1; i++){
      newArr.push(array[i] * array[i+1])
    }  
    return Math.max(...newArr)
}
  
  adjacentElementsProduct([ -23, 4, -5, 99, -27, 329, -2, 7, -921 ]);
  //40);
  adjacentElementsProduct([1, 2, 3]);
  //6);
  adjacentElementsProduct([1, 5, 10, 9]);
  //90);
function removeSmallest(numbers) {
    let smallest = Math.min.apply( Math, numbers)
    let arr = []
    for(let i = 0; i < numbers.length; i++){
      if(i !== numbers.indexOf(smallest)) arr.push(numbers[i])
    }
    return arr
}
  
  removeSmallest([1, 2, 3, 4, 5])//, [2, 3, 4, 5]
  removeSmallest([5, 3, 2, 1, 4])//, [5, 3, 2, 4]
  removeSmallest([3,4,2,2])//, [2, 2, 2, 1]
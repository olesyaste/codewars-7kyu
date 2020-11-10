function nthSmallest(arr, pos){
    let sorted = arr.sort((a,b) => {
      return a-b
    })
    return sorted[pos-1]
}
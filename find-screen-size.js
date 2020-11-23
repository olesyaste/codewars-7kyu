function findScreenHeight(width, ratio) {
    let s = ratio.split(':');
    let height = +s[1] * (width / +s[0])
    return(`${width}x${height}`)  
}
  
  findScreenHeight(3840,"32:9");
  //"3840x1080")
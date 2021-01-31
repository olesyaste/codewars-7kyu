var number = function(busStops){
    let arr = [];
    for(let i = 0; i < busStops.length; i++){
      arr.push(busStops[i][0] - busStops[i][1])
    }
    return arr.reduce((a,b) => a+b)
}
  
 // number([[10,0],[3,5],[5,8]])//,5);
 // number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]])//,17);
 // number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]])//,21);
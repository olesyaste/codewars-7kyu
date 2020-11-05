function evaporator(content, evap_per_day, threshold){ 
    let days = 0;
    let per = 100;
    while (per > threshold) {
      per = per - (per * evap_per_day/100)
      days++
    }
    return days
}
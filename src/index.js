'use strict';

exports.min = function min (numArr) {
    if (!numArr || numArr == 0){
      return 0;
  }else{
      let minValue = numArr[0];
      for(let i = 0; i < numArr.length; i++){
          if (numArr[i] < minValue){
              minValue = numArr[i];
          }
      }
      return minValue;
  }  
};

exports.max = function max (numArr) {
  if ( !numArr || numArr == 0){
    return 0;
}else{
    let maxValue = numArr[0];
    for(let i = 0; i < numArr.length; i++){
        if (numArr[i] > maxValue){
            maxValue = numArr[i];
        }
    }
    return maxValue;
} 
};

exports.avg = function avg (numArr) {
  if ( !numArr || numArr == 0){
    return 0;
}else{
    const avgValue = numArr.reduce((sum, current)=>{
        return sum + current;     
    });
    return avgValue/numArr.length;
} 
};
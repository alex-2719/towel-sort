
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (Array.isArray(matrix)){
    return matrix.length ===0 ? matrix :
    matrix.reduce(function(prev, item, index){
      if (((index + 1) % 2) === 0){
        return prev.concat(item.reverse());
      }
      else {
        return prev.concat(item);
      }
    },[]);
  }
  else {
    return [];
  }
}


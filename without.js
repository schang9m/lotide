const without = function(source, remove) {
  //compare source to remove,  and get rid of the ones that are the same
  //I can use filter
  // return source.filter(item => !remove.includes(item));
  // const compare = function(item) {
  //   return !remove.includes(item)
  // };
  // let filterArr = source.filter(compare)
  let newArr = [];
  for(let i = 0; i < source.length; i++) {
    let same = false;
    for(let y = 0; y <remove.length; y++) {
      if (source[i] === remove[y]) {
        same = true;
        break;
      }
    }
    if(!same){
      newArr.push(source[i]);
    }
  }
  return newArr;
};

module.exports = without;

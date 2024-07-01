const middle = function(array) {
  let mid;
  if (array.length < 3) {
    return [];
  }else if (array.length % 2 !== 0) {
    mid = (Math.floor(array.length / 2))
    return array.slice(mid, mid + 1);
  } else {
    mid = (array.length / 2) - 1
    return array.slice(mid, mid + 2);
  }
};

module.exports = middle;
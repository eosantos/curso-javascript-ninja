var arr = [1, 2, 3, 4, 5];

var map = arr.map(function (item, index, array) {
  return item + 1;
});

console.log(arr, map);

// 2.b. Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique
// sevenRandomNumbers()
// [1,4,5,7,9,8,0]

sevenRandomNumbers = () => {
  var arr = [];
  while (arr.length < 7) {
    var r = Math.floor(Math.random() * 9);
    if (arr.indexOf(r) === -1) arr.push(r);
  }
  console.log(arr);
};

sevenRandomNumbers();

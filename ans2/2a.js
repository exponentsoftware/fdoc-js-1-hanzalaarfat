// Looping a triangle: Write a loop that makes seven calls to console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######
let tringle = "";
for (let i = 1; i <= 7; i++) {
  for (let j = 1; j <= i; j++) {
    tringle += "#";
  }
  console.log(tringle);
  tringle = "";
}

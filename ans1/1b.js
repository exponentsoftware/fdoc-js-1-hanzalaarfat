// 1.b. Write a function called cleanText. The function takes raw text as a parameter and returns the clean text.

const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;

function cleanText(sentence) {
  let sentence1 = " ";
  for (let i of sentence) {
    if (
      (i.charCodeAt() >= 65 && i.charCodeAt() <= 90) || // A to Z
      (i.charCodeAt() >= 97 && i.charCodeAt() <= 122) || // a to z
      i.charCodeAt() == 32 || // for space
      i.charCodeAt() == 46 // for dot(.)
    ) {
      sentence1 = sentence1 + i;
    }
  }
  return sentence1;
}
console.log(cleanText(sentence));

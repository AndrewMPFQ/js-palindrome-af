function reverseString(str) {
  let stringSplit = str.split("");
  let reverse = stringSplit.reverse();
  let join = reverse.join("");
  return join;
}

console.log(reverseString("hello"));

function reverseSentence() {
  let sentence = "Here is a sentence";
  let sentenceArr = sentence.split(" ");
  sentenceArr.reverse();
  return sentenceArr.join(" ");
}

console.log(reverseSentence());

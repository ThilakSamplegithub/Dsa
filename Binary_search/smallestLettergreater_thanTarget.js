var nextGreatestLetter = function (letters, target) {
  let start = 0;
  let end = letters.length - 1;
  while (start <= end) {
    //write Math.floor and move start only even if its equal because we want greater than equal to target
    let mid = start + (end - start) / 2;
    mid = Math.floor(mid);
    if (target < letters[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  // console.log(start%letters.length)
  return letters[start % letters.length];
};
const letters = ["x", "x", "y", "y"],
  target = "z";
let n = nextGreatestLetter(letters, target);
console.log(n);
module.exports = { n };

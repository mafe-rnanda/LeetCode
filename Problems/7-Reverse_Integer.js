/**
 * @param {number} x
 * @return {number}
 *
 * Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
 */

const reverse = function (x) {
  const str = x.toString();
  const arr = str.split("");
  const reversed = arr.reverse().join("");
  return parseFloat(reversed) * Math.sign(x);
};

// TESTING
console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
console.log(reverse(0));

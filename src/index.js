/**
 * Function count quantity of zeros for given number's factorial
 * @param {number} number given number
 * @return {number} quantity of zeros
 */
module.exports = function getZerosCount(number) {
  let count = 0;
  let num = number;
  while (num > 0) {
    num = Math.floor(num / 5);
    count += num;
  }
  return count;
};

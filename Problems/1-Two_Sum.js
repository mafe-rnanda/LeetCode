/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
*/

const twoSum = function (nums, target) {
    const result = [];
    for (let i = 0; i <= nums.length - 1; i++) {
      const num = nums[i];
      for (let j = 0; j <= nums.length - 1; j++) {
        const num2 = nums[j];
        if (num + num2 === target && i !== j) {
          result.push(i, j);
          return result;
        }
      }
    }
  };

// TESTING
console.log(twoSum([2,7,11,15],9))
console.log(twoSum([3,2,4],6))
console.log(twoSum([3,3],6))
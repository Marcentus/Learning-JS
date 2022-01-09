// var twoSum = function (nums, target) {
//   for (let index = 0; index < nums.length; index++) {
//     const element1 = nums[index]
//     var index1 = index
//     for (let index = 0; index < nums.length; index++) {
//       if (index != index1) {
//         var index2 = index
//         const element2 = nums[index]
//         var sum = element1 + element2
//         if (sum == target) {
//           return [index1, index2]
//         }
//       }
//     }
//   }
// }

const twoSum = (nums, target) => {
  const pairs = {}
  for (const num of nums) {
    const alterEgo = target - num
    pairs[num] = alterEgo
  }
  for (const num of nums) {
    const alterEgo = target - num
    if (pairs[alterEgo]) {
      return [alterEgo, num]
    }
  }
  // nums.forEach((num) => {
  //   const alterEgo = target - num
  //   pairs[num] = alterEgo
  // })
  // nums.forEach((num) => {
  //   const alterEgo = target - num
  //   // Undefined, Null, and 0 are considered false everything else is true for the most part.
  //   if (pairs[alterEgo]) {
  //     return [alterEgo, num] // does not actually return because not in main function
  //   }
  // })
}

var nums = [1, 5, 4, 1, 1]
var target = 9
//console.log(twoSum(nums, target))
console.log(twoSum(nums, target))

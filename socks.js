// https://www.hackerrank.com/challenges/sock-merchant/problem
const socks = (nums) => {
  const pairs = {}
  let numPairs = 0

  nums.forEach((num) => {
    if (pairs[num]) {
      pairs[num] = pairs[num] + 1
    } else {
      pairs[num] = 1
    }
  })
  // add up all the pairs based on if there is 2 or more
  for (index in pairs) {
    numPairs = numPairs + Math.floor(pairs[index] / 2)
  }

  return numPairs
}

nums = [10, 20, 30, 50]

console.log(socks(nums))

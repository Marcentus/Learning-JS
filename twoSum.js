
var twoSum = function(nums, target) {
    for (let index = 0; index < nums.length; index++) {
        const element1 = nums[index];
        var index1 = index
        for (let index = 0; index < nums.length; index++) {
            if (index != index1) {
                var index2 = index
                const element2 = nums[index];
                var sum = element1 + element2;
                if (sum == target) {
                    return [ index1, index2 ]
                }
            }
        } 
    }
};

var nums = [4, 3, 4, 5, 3];
var target = 7;
console.log(twoSum(nums, target));
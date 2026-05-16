function findTwoSum(nums, target) {
    // save each number and its index in a map, then for each number check whether target minus that number is already in the map.
    const map = {};

    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        const complement = target - currentNum;

        if (map.hasOwnProperty(complement)) {
            return [map[complement], i];
        }

        map[currentNum] = i;
    }

    return [];
}

console.log("=== Problem 2: Two Sum ===\n");

const nums1 = [2, 7, 11, 15];
const target1 = 9;
console.log(`Test 1:`);
console.log(`Input: nums = [${nums1}], target = ${target1}`);
const result1 = findTwoSum(nums1, target1);
console.log(`Result: [${result1}]`);
console.log(`Verification: nums[${result1[0]}] + nums[${result1[1]}] = ${nums1[result1[0]]} + ${nums1[result1[1]]} = ${nums1[result1[0]] + nums1[result1[1]]}`);
console.log(`Expected: [0, 1]\n`);

const nums2 = [3, 2, 4];
const target2 = 6;
console.log(`Test 2:`);
console.log(`Input: nums = [${nums2}], target = ${target2}`);
const result2 = findTwoSum(nums2, target2);
console.log(`Result: [${result2}]`);
console.log(`Verification: nums[${result2[0]}] + nums[${result2[1]}] = ${nums2[result2[0]]} + ${nums2[result2[1]]} = ${nums2[result2[0]] + nums2[result2[1]]}`);
console.log(`Expected: [1, 2]\n`);

const nums3 = [3, 3];
const target3 = 6;
console.log(`Test 3:`);
console.log(`Input: nums = [${nums3}], target = ${target3}`);
const result3 = findTwoSum(nums3, target3);
console.log(`Result: [${result3}]`);
console.log(`Verification: nums[${result3[0]}] + nums[${result3[1]}] = ${nums3[result3[0]]} + ${nums3[result3[1]]} = ${nums3[result3[0]] + nums3[result3[1]]}`);
console.log(`Expected: [0, 1]\n`);

const nums4 = [-1, -2, -3, 5, 10];
const target4 = 7;
console.log(`Test 4:`);
console.log(`Input: nums = [${nums4}], target = ${target4}`);
const result4 = findTwoSum(nums4, target4);
console.log(`Result: [${result4}]`);
console.log(`Verification: nums[${result4[0]}] + nums[${result4[1]}] = ${nums4[result4[0]]} + ${nums4[result4[1]]} = ${nums4[result4[0]] + nums4[result4[1]]}`);
console.log(`Expected: [2, 4]\n`);

const nums5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target5 = 15;
console.log(`Test 5:`);
console.log(`Input: nums = [${nums5}], target = ${target5}`);
const result5 = findTwoSum(nums5, target5);
console.log(`Result: [${result5}]`);
console.log(`Verification: nums[${result5[0]}] + nums[${result5[1]}] = ${nums5[result5[0]]} + ${nums5[result5[1]]} = ${nums5[result5[0]] + nums5[result5[1]]}`);
console.log(`Expected: indices where two numbers sum to 15\n`);


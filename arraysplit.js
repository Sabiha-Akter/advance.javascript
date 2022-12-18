const nums = [2, 3, 4, 5, 6, 7, 8, 9];

const part = nums.slice(1, 5);

const remove = nums.splice(2, 4, 44, 33, 22);

const together = nums.join("id:");

console.log(together);
console.log(remove);
console.log(part);
console.log(nums);
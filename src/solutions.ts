// question solved - 1 
function filterEvenNumbers(nums: number[]): number[] {
    return nums.filter(num => {
       return num % 2 === 0
    })
}

const result1 = filterEvenNumbers([1, 2, 3, 4, 5, 6]);

console.log(result1);

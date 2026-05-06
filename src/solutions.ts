// question solved - 1 
function filterEvenNumbers(nums: number[]): number[] {
    return nums.filter(num => {
       return num % 2 === 0
    })
}

const result1 = filterEvenNumbers([1, 2, 3, 4, 5, 6]);

// console.log(result1);


// question solved - 2
function reverseString(str : string) {
    return str.split("").reverse().join("")
}

const result2 = reverseString("typescript");
// console.log(result2);



// question solved - 3
type StringOrNumber = string | number;

function checkType(value: StringOrNumber) {
    if(typeof value === "string") {
        return "String"
    } else if(typeof value === "number") {
        return "Number"
    }
}

const result3 = checkType("Hello");
const result4 = checkType(42);
// console.log(result4);

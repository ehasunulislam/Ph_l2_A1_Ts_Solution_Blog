// question solved - 1 
function filterEvenNumbers(nums: number[]): number[] {
    return nums.filter(num => {
       return num % 2 === 0
    })
}



// question solved - 2
function reverseString(str : string) {
    return str.split("").reverse().join("")
}


// question solved - 3
type StringOrNumber = string | number;

function checkType(value: StringOrNumber) {
    if(typeof value === "string") {
        return "String"
    } else if(typeof value === "number") {
        return "Number"
    }
}


// question solved - 4
function getProperty <T, k extends keyof T>(object: T, key: k) {
    return object[key];
}


// question solved - 5
interface Book {
    title: string,
    author: string
    publishedYear: number,
}

function toggleReadStatus(book: Book): Book & {isRead: boolean} {
    return {
        ...book,
        isRead: true
    }
}



// question solved - 6
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    grade: string;

    constructor(name: string, age: number, grade: string) {
        super(name, age);
        this.grade = grade;
    }

    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`
    }
}



// question solved - 7
function getIntersection(arr1: number[], arr2: number[]) {
    return(arr1.filter((num) => {
      return arr2.includes(num)
    }))
}


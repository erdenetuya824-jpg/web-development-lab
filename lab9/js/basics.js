console.log("========== LAB 9: JAVASCRIPT BASICS ==========");


// 1. ХУВЬСАГЧ
let studentName = "Bat";
let age = 20;
const course = "Web Design";

console.log("Нэр:", studentName);
console.log("Нас:", age);
console.log("Хичээл:", course);


// 2. TYPEOF
console.log("\n--- typeof ---");

console.log(typeof studentName);
console.log(typeof age);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);


// 3. ТӨРӨЛ ХӨРВҮҮЛЭЛТ
console.log("\n--- Type Conversion ---");

let stringNumber = "150";

console.log(Number(stringNumber));
console.log(String(age));
console.log(Boolean(1));
console.log(Boolean(0));


// 4. CONSOLE.TABLE
console.log("\n--- console.table ---");

const students = [
    { id: 1, name: "Bat", age: 20, grade: 95 },
    { id: 2, name: "Bold", age: 21, grade: 88 },
    { id: 3, name: "Saraa", age: 19, grade: 97 }
];

console.table(students);


// 5. FLOATING POINT
console.log("\n--- 0.1 + 0.2 ---");

let result = 0.1 + 0.2;

console.log("0.1 + 0.2 =", result);

console.log("0.1 + 0.2 === 0.3:", result === 0.3);

console.log("toFixed(2):", result.toFixed(2));
console.log("========== LAB 9: ALGORITHMS ==========");


// =====================================
// 1. SUM TO N
// =====================================

function sumTo(n) {

    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    return sum;
}


// =====================================
// 2. FACTORIAL
// =====================================

function factorial(n) {

    if (!Number.isInteger(n) || n < 0) {
        return null;
    }

    let result = 1;

    for (let i = 1; i <= n; i++) {
        result *= i;
    }

    return result;
}


// =====================================
// 3. PRIME NUMBER
// =====================================

function isPrime(n) {

    if (!Number.isInteger(n) || n < 2) {
        return false;
    }

    for (let i = 2; i * i <= n; i++) {

        if (n % i === 0) {
            return false;
        }

    }

    return true;
}


// =====================================
// 4. FIZZBUZZ
// =====================================

function fizzBuzz(n) {

    for (let i = 1; i <= n; i++) {

        if (i % 15 === 0) {
            console.log("FizzBuzz");
        }

        else if (i % 3 === 0) {
            console.log("Fizz");
        }

        else if (i % 5 === 0) {
            console.log("Buzz");
        }

        else {
            console.log(i);
        }

    }

}


// =====================================
// 5. COUNT VOWELS
// =====================================

function countVowels(text) {

    const vowels = "aeiouAEIOUаэиоуөүыАОУЭИӨҮЫеёюяЕЁЮЯ";

    let count = 0;

    for (let i = 0; i < text.length; i++) {

        for (let j = 0; j < vowels.length; j++) {

            if (text[i] === vowels[j]) {
                count++;
                break;
            }

        }

    }

    return count;
}


// =====================================
// 6. PALINDROME
// =====================================

function isPalindrome(text) {

    text = text.toLowerCase();

    let reversed = "";

    for (let i = text.length - 1; i >= 0; i--) {
        reversed += text[i];
    }

    return text === reversed;
}


// =====================================
// 7. MAX OF ARRAY
// =====================================

function maxOf(array) {

    if (array.length === 0) {
        return null;
    }

    let max = array[0];

    for (let i = 1; i < array.length; i++) {

        if (array[i] > max) {
            max = array[i];
        }

    }

    return max;
}


// =====================================
// 8. DIGIT SUM
// =====================================

function digitSum(n) {

    if (!Number.isInteger(n)) {
        return null;
    }

    if (n < 0) {
        n = -n;
    }

    let sum = 0;

    while (n > 0) {

        sum += n % 10;

        n = Math.floor(n / 10);
    }

    return sum;
}


// =====================================
// TEST RESULTS
// =====================================

console.log("sumTo(10):", sumTo(10));

console.log("factorial(5):", factorial(5));

console.log("isPrime(17):", isPrime(17));

console.log("countVowels('hello'):", countVowels("hello"));

console.log("isPalindrome('level'):", isPalindrome("level"));

console.log("maxOf([10, 50, 20, 80]):",
    maxOf([10, 50, 20, 80]));

console.log("digitSum(12345):", digitSum(12345));

console.log("FizzBuzz(15):");

fizzBuzz(15);
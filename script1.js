function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}


function digitSum(n) {
    let sum = 0;
    while (n > 0) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }
    return sum;
}


let L = parseInt(prompt("Enter L:"));
let R = parseInt(prompt("Enter R:"));
let K = parseInt(prompt("Enter K:"));
if (L < 1 || R > 1000000 || L > R) {
    alert("Invalid input for L and R");
    return;
}

if (K < 2 || K > 9) {
    alert("Invalid input for K");
    return;
}

let count = 0;

for (let x = L; x <= R; x++) {
    

    if (x % K !== 0) continue;
    
let temp = x;
let hasZero = false;

while (temp > 0) {
    if (temp % 10 === 0) {
        hasZero = true;
        break;
    }
    temp = Math.floor(temp / 10);
}

if (hasZero) continue;


    let sum = digitSum(x);
    if (!isPrime(sum)) continue;
    
    count++;
}


alert("count");

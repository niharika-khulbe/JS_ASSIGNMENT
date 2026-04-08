let N = parseInt(prompt("Enter value of N:"));
let seed = parseInt(prompt("Enter seed value:"));
let current = N;
for (let i = 1; i <= 3; i++) {
    if (current % 2 === 0) {
        current = current / 2 + seed;
    } else {
        current = current * 3 - seed;
    }
}
let condition_check=(current>=100 && current <=999);
let middleDigit = Math.floor(current / 10) % 10;
if(condition_check && middleDigit==seed){
    alert("YES, " + current);
} else {
    alert("NO, " + current);
}

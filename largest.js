function findLargestNumber(a, b, c) {
    const largest = (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);
    console.log("The largest number is: " + largest);
}

const num1 = 25;
const num2 = 14;
const num3 = 37;
findLargestNumber(num1, num2, num3);

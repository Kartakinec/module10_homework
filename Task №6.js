function hasDuplicates(arr) {
    return new Set(arr).size !== arr.length;
}
 
const arr = [2, 4, 8, 15, 16, 23, 42];
 
if (hasDuplicates(arr)) {
    console.log("true.");
}
else {
    console.log("false.");
}
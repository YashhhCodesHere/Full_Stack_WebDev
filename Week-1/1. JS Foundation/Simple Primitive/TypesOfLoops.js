let arr = [1,2,3,4,5,6,7,8,9,10];
let obj = {
    name : "Robinn",
    registration : "23FE10CAI00376"
};
const str = "Hello Yash";

console.log("Using standard for loop:-")
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

console.log("Using for each loop:-");

arr.forEach((val, idx) => {
    console.log(`On squaring value at ${idx}: ${val*val}`);
})

console.log(`Using for-in loop:- (Avoid using for arrays)`);

for(let key in obj){
    console.log(`${key} => ${obj[key]}`);
}

console.log('Using for-of loop:-');

for(let char of str){
    process.stdout.write(`${char} `);
}
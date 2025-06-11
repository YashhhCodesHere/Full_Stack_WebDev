// ForEach Loop:-
let arr = [1, 2, 3, 4, 5];
arr.forEach((i, idx) => {
    console.log(`At position ${idx}: "Element = ${i}"`);
});

// map:-
const nums = [1, 3, 5, 9];

const doubled = nums.map((item) => {
    return item *= 2; 
});

console.log(doubled);

// filter:-
const num = [1, 5, 9, 12];

const multipleOfThree = num.filter((element) => {
    if(element % 3 == 0){
        return true;
    }
});

console.log(`Elements in array:${num}; \nwhich are multiple of 3 are: ${multipleOfThree}`);

// Accessing Objects:-

let obj = {
    name : "Robinn",
    age : 21,
    profession : "Student"
}

console.log(`First way is: ${obj.name}, and second way is: ${obj['age']}`);

// Asynchronous JS:-

async function gettingApi() {
    let blob = await fetch('http://api.citybik.es/v2/networks');
    // After using 'fetch', We get a promise, which is a Blob(Binary Large Object) -> very large String.
    let data = await blob.json();
    console.log(data);
}

gettingApi();
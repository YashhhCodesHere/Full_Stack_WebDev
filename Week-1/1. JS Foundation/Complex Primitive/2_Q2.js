// Write a program to print the biggest number in an array

let arr = [92, 34, 522, 133, 423, 121, 954, 822];

let max = arr[0];

for(let i = 1; i < arr.length; i++){
    if(arr[i] > max){
        max = arr[i];
    }
}

console.log(`Largest element in the array is: ${max}`);
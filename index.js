// let arr= ["10kone","two10k","three", "four","five10k"];
// for(i of arr){
//     if(i.includes("10k")){
//         console.log(i);
//     }
// }

// 1.Write a function to filter an array of strings to include only strings that start with a specified character.

// Example: ["hello", "world", "this", "is", "a", "test"], "h" -> ["hello"]
let arr=  ["hello", "world", "this", "is", "a", "test"];
for(i of arr){
    if(i[0]=="h"){
        console.log("Q1----")
        console.log(i)
    }
}

// (or)

// let arr1=  ["hello", "world", "this", "is", "a", "test"];
// for(i of arr){
//     if(i.startsWith("h")){
//         console.log(i)
//     }
// }

// 2. Write a function to filter an array of strings to exclude strings that include a specified substring.

// Example: ["hello", "world", "this", "is", "a", "test"], "o" -> [ "this", "is", "a", "test"]
let arr2 = ["hello", "world", "this", "is", "a", "test"];
newArr2 = []; 
for(num=0; num<=arr2.length-1; num++){
    if (arr2[num].includes("o")){
    }
    else{
        newArr2.push(arr2[num]);
    }
}
console.log("Q2----")
console.log(newArr2);

// 3. Write a function to extract the first character from each string in an array of strings.

// Example: ["hello", "world", "this", "is", "a", "test"] -> ["h", "w", "t", "i", "a", "t"]
let arr3 =["hello", "world", "this", "is", "a", "test"];

function arrFunction(msg){
    newArr3 =[];
    console.log("Q3----")
    for (i of msg){
    newArr3.push(i[0]);
    }
    return newArr3;

}

console.log(arrFunction(arr3))
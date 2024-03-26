 
//  Question 1

//  for (let i = 1;  i < 6; i++) {
//     document.write("hello world <br>" );
// } 

// Question 2
// for (let i = 1; i<= 10; i++ ) {
//     document.write(i + "<br>")
    
// }

// Question 3
// let num = +prompt("enter a number");
// for (let i = 1; i <= 15; i++) {
//     console.log(num+" X "+ i +" = "+ num*i);

    
// }

// Question 4

// let A = ["Nokia","Samsung","Apple","Sony","Huawei"];
// for (let i = 0; i < A.length; i++) {
//     document.write(A[i] + "<br>");
//   }


// Question 5
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
  
// for (let i = 0; i < fruits.length; i++) {
//   document.write(fruits[i] + "<br>");
// }
// function initializeArray() {
//     let n = parseInt(prompt("Please enter the number of items: "));
//     let arr = [];
    
//     for (let i = 0; i < n; i++) {
//         let item = prompt("Enter item " + (i + 1) + ": ");
//         arr.push(item);
//     }

//     return arr;
// }
   
// Question 8

// let shop = ["cake", "apple pie", "cookie", "chips", "patties"];
// let userInput = prompt('Enter Your Items Name');
// let Available = false

// for(let i = 0; i < shop.length; i++){
//     if(userInput === shop[i]){
//         console.log(' available')
//         Available = true
//     }
// }
// if (!isAvailable){
//     console.log('Its Not Available');
// }  

// Question 9

// Function to find the largest number in the given array
// function findLargestNumber(arr) {
//     if (arr.length === 0) {
//         return "Array is empty.";
//     }

//     var largest = arr[0]; // Assume the first element is the largest

//     for (var i = 1; i < arr.length; i++) {
//         if (arr[i] > largest) {
//             largest = arr[i];
//         }
//     }

//     return largest;
// }

// // Example usage:
// var array = [10, 5, 23, 8, 15];
// var largestNumber = findLargestNumber(array);
// console.log("The largest number in the array is: " + largestNumber);



// Question 12
  
// for (let i = 5; i < 100; i += 5){
//     console.log(i);
// }
  


// Question 15
// const A = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// for (let i = 0; i < A.length; i++) {
//   for (let j = 0; j < A[i].length; j++) {
//     document.write(A[i][j] );
//   }
// }


// Question  19
// let userInput = +prompt('Enter Your Number!');
// let star = ''
// let h1 = document.querySelector('h1')

// for (i = userInput; i >= 1; i--) {
//     let star = ''
//     for (j = 1; j <= i; j++) {
//         star += "*"
//     }
//     console.log(star);
// }




















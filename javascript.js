// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }




// function palindrome(str1){
//     let i,str2="";
//     for(i=str1.length-1;i>=0;i--){
//         str2=str2.concat(str1.charAt(i));
//     }
//     if(str1==str2)
//         console.log("palindrome");
//     else  
//         console.log("Not")
//  }
//  palindrome("malayalam");


// function large(arr) {
//   let i,
//     num = 0;
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] > num) num = arr[i];
//   }
//   console.log("Largest number is " + num);
// }
// large([1, 2, 3, 4, 5, 6]);
// function count(a) {
//   let str = {};
//   for (let i = 0; i < a.length; i++) {
//     if (str[a[i]] == undefined) {
//       str[a[i]] = 1;
//     } else {
//       str[a[i]] += 1;
//     }
//   }
//   return str;
// }

// let a = "niroopa";

// console.log(a);
// console.log(count(a));

// let string=" im niroo";
// let strarr=string.split(" ");
// let newstrarr="";
// for(let i=0;i<strarr.length;i++){
//     if(strarr[i].length>newstrarr.length)
//         newstrarr=strarr[i];
// }
// console.log("Longest word is "+newstrarr);

// function factorial(num) {
//   let res = 1;
//   for (let i = 1; i <= num; i++) {
//     res *= i;
//   }
//   console.log("Factorial of " + num + " is " + res);
// }
// factorial(7);

// function Fahren(celsius) {
//   let fahren = (celsius * 9) / 5 + 32;
//   console.log(fahren + " F");
// }
// Fahren(6);

let arr = [0, 1, 2, 3, 4, 5, 7, 8, 9];
for (i = 0; i < arr.length; i++) {
  if (arr[i] != i) {
    console.log(i);
    break;
  }
}



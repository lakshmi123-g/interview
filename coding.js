/// Bubble sort
// function bubbleSort(arr) {
//   var len = arr.length;
//   var swapped;
//   do {
//     swapped = false;
//     for (var i = 0; i < len - 1; i++) {
//       if (arr[i] > arr[i + 1]) {
//         var temp = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = temp;
//         swapped = true;
//       }
//     }
//   } while (swapped);
//   return arr;
// }
// var numbers = [5, 3, 8, 4, 2];
// console.log("Before sorting", numbers);
// console.log("After sorting", bubbleSort(numbers));

// let a = [1, 3, 4, 5, 6, 7, 2, 5, 4, 8, 9, 4, 7, 9, 4, 5, 7, 3, 6, 7];
// let sum = 0;

// for (let i = 1; i < a.length; i++) {
//   if (a[i - 1] % 2 === 1) {
//     sum += a[i];
//   }
// }
// console.log("Sum of elements with previous odd number:", sum);

// function isPalindrome(str) {
//   let reversed = str.split('').reverse().join('');
//   return str === reversed;
// }
// function findMax(arr) {
//   let max = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }

//   return max;
// }
// let numbers = [5, 3, 8, 4, 2];
// console.log("Maximum number:", findMax(numbers))

// let text = "madam";
// console.log("Is Palindrome:", isPalindrome(text));

// let anotherText = "hello";
// console.log("Is Palindrome:", isPalindrome(anotherText));

// console.log(1),
// console.log(2),
// setTimeout(()=>{
//   console.log(3)
// },1000);
// setTimeout(()=>{
//   console.log(4)
// },2000);
// console.log(5);
// setTimeout(()=>{
//   console.log(6)
// },0)
// (function(){
//   var a = b = 3;
// })();

// console.log("a defined? " + (typeof a !== 'undefined'));
// console.log("b defined? " + (typeof b !== 'undefined'));
// var myObject = {
//   foo: "bar",
//   func: function() {
//       var self = this;
//       console.log("outer func:  this.foo = " + this.foo);
//       console.log("outer func:  self.foo = " + self.foo);
//       (function() {
//           console.log("inner func:  this.foo = " + this.foo);
//           console.log("inner func:  self.foo = " + self.foo);
//       }());
//   }
// };
// myObject.func();
// function foo1()
// {
//   return {
//       bar: "hello"
//   };
// }

// function foo2()
// {
//   return
//   {

//       bar: "hello"
//   };
// }
// console.log(foo1());
// console.log(foo2());

// function isPalindrome(str) {
//   str = str.replace(/\W/g, '').toLowerCase();
//   return (str == str.split('').reverse().join(''));
// }
// console.log(isPalindrome('madams'));
// var arr1 = "john".split('');
// var arr2 = arr1.reverse();
// var arr3 = "jones".split('');
// arr2.push(arr3);
// console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
// console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));
// console.log(1 +  "2" + "2");
// console.log(1 +  +"2" + "2");
// console.log(1 +  -"1" + "2");
// console.log(+"1" +  "1" + "2");
// console.log( "A" - "B" + "2");
// console.log( "A" - "B" + 2);
// const arr= [
//   {type:'fruit',name:'mango'},
//   {type:'veg',name:'potato'},
//   {type:'fruit',name:'mango'},
//   {type:'veg',name:'spinach'},
// ]
// const out= arr.filter(ele=>ele.type ==='veg');
// console.log(out)

// function findSubarrayWithSum(arr, targetSum) {
//   let start = 0;
//   let end = 0;
//   let currentSum = 0;
//   while (end <= arr.length) {
//     if (currentSum === targetSum) {
//       return arr.slice(start, end);
//     } else if (currentSum < targetSum) {
//       currentSum += arr[end];
//       end++;
//     } else {
//       currentSum -= arr[start];
//       start++;
//     }
//   }
//   return null;
// }
// const arr = [1, 4, 20, 3, 10, 5];
// const targetSum = 33;
// const subarray = findSubarrayWithSum(arr, targetSum);

// console.log(subarray);

// const arr = [7, 5, 8, 2, 4 ];
// const uniqueAppearances = (arr = []) => {
//    const map = {};
//    const set = new Set();
//    for(let i = 0; i < arr.length; i++){
//       const el = arr[i];
//       map[el] = (map[el] || 0) + 1;
//    };
//    for(key in map){
//       const value = map[key];
//       if(set.has(value)){
//          return false;
//       };
//       set.add(value);
//    };
//    return true;
// };
// console.log(uniqueAppearances(arr));

// function modifyArray(arr, callback) {
//   arr.push(100);
//   callback();
// }
// var arr = [1, 2, 3, 4, 5];
// modifyArray(arr, function () {
//   console.log("array has been modified", arr);});
//   // reverse a string
// var string = "Welcome to this Javascript Guide!";
// var reverseEntireSentence = reverseBySeparator(string, "");
// var reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");
// function reverseBySeparator(string, separator) {
//   return string.split(separator).reverse().join(separator);
// }
// console.log( reverseEntireSentence,reverseEachWord);
// class ManageSalaries {
//    constructor() {
//      this.salaryRates = [
//        { id: 1, role: 'developer', rate: 100 },
//        { id: 2, role: 'architect', rate: 200 },
//        { id: 3, role: 'manager', rate: 300 },
//      ];
//    }

//    calculateSalaries(empId, hoursWorked) {
//      let salaryObject = this.salaryRates.find((o) => o.id === empId);
//      return hoursWorked * salaryObject.rate;
//    }
//  }

//  const mgtSalary = new ManageSalaries();
//  console.log("Salary : ", mgtSalary.calculateSalaries(1, 100));
// class Animal{
//    eat() {
//      console.log("Animal Eats")
//    }
//  }
//  class Bird extends Animal{
//    fly() {
//      console.log("Bird Flies")
//    }
//  }

//  var parrot = new Bird();
//  parrot.eat();
//  parrot.fly();
//****    Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5.
// for (let i = 1; i <= 100; i++) {
//    let f = i % 3 == 0,
//      b = i % 5 == 0;
//    console.log(f ? (b ? 'FizzBuzz' : 'Fizz') : b ? 'Buzz' : i);
// }
// method 2
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

// function createCounter() {
//   let count = 0;
//   function increment() {
//     count++;
//   }
//   function decrement() {
//     count--;
//   }
//   function getCount() {
//     return count;
//   }
//   return {
//     increment: increment,
//     decrement: decrement,
//     getCount: getCount,
//   };
// }
// const counter = createCounter();
// console.log(counter.getCount());
// counter.increment();
// counter.increment();
// counter.increment();
// console.log(counter.getCount());
// counter.decrement();
// console.log(counter.getCount());

/* Remove Falsy values in the array*/
// const array = [0, 1, false, 2, '', 3, null, undefined, NaN, 4];
// const filteredArray = array.filter(Boolean);
// console.log(filteredArray);

/* Remove duplicates in the array */

// const array1 = [1, 2, 2, 3, 4, 4, 5,5,6,6,6,7,1,2,0];
// const uniqueArray = [...new Set(array1)];
// console.log(uniqueArray);
// merging two arrays
// var merge = function (nums1, m, nums2, n) {
//   let idx1 = m - 1;
//   let idx2 = n - 1;
//   let mergeIdx = m + n - 1;
//   while (idx1 >= 0 && idx2 >= 0) {
//     if (nums1[idx1] >= nums2[idx2]) {
//       nums1[mergeIdx] = nums1[idx1];
//       idx1--;
//     } else {
//       nums1[mergeIdx] = nums2[idx2];
//       idx2--;
//     }
//     mergeIdx--;
//   }
//   while (idx2 >= 0) {
//     nums1[mergeIdx] = nums2[idx2];
//     idx2--;
//     mergeIdx--;
//   }
// };
// let nums1 = [1, 2, 3, 0, 0, 0];
// let nums2 = [2, 5, 6];

// merge(nums1, 3, nums2, 3);

// console.log(nums1);
// var removeElement = function (nums, val) {
//   let left = 0;
//   let right = nums.length - 1;
//   while (left <= right) {
//     if (nums[left] === val) {
//       [nums[left], nums[right]] = [nums[right], nums[left]];
//       right--;
//     } else {
//       left++;
//     }
//   }
//   return left;
// };

// // Example
// let nums = [3, 2, 2, 3];
// let val = 3;
// let k = removeElement(nums, val);
// console.log("Output:", k, "nums:", nums.slice(0, k));

// var removeDuplicates = function(nums) {
//   let k = 1; 
//   for (let i = 1; i < nums.length; i++) {
//       if (nums[i] !== nums[i - 1]) {
//           nums[k] = nums[i];
//           k++;
//       }  }
//   return k;
// };
// let nums = [1, 1, 2,2,6,87,6];
// let k = removeDuplicates(nums);
// console.log("Output:", k, "nums =", nums.slice(0, k).concat(Array(nums.length - k).fill('_')));
//split Bill
// const expenses = [
//   { payer: 'A', amount: 1000, participants: ['A', 'B', 'C', 'D'] },
//   { payer: 'B', amount: 400, participants: ['A', 'B', 'C', 'D'] },
//   { payer: 'B', amount: 75, participants: ['B', 'C', 'D'] }
// ];


// const personTotal = {};
// for (const expense of expenses) {
//   for (const participant of expense.participants) {
//     if (!personTotal[participant]) {
//       personTotal[participant] = 0;
//     }
//     personTotal[participant] += expense.amount / expense.participants.length;
//   }
// }


// const owes = {};
// for (const person in personTotal) {
//   for (const payer in personTotal) {
//     if (person !== payer) {
//       const amountOwed = personTotal[payer] - personTotal[person];
//       if (!owes[person]) {
//         owes[person] = [];
//       }
//       if (amountOwed > 0) {
//         owes[person].push(`${payer} $${amountOwed.toFixed(2)}`);
//       }
//     }
//   }
// }

//Majority element
/// Bubble sort
// function bubbleSort(arr) {
//   var len = arr.length;
//   var swapped;
//   do {
//     swapped = false;
//     for (var i = 0; i < len - 1; i++) {
//       if (arr[i] > arr[i + 1]) {
//         var temp = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = temp;
//         swapped = true;
//       }
//     }
//   } while (swapped);
//   return arr;
// }
// var numbers = [5, 3, 8, 4, 2];
// console.log("Before sorting", numbers);
// console.log("After sorting", bubbleSort(numbers));

// let a = [1, 3, 4, 5, 6, 7, 2, 5, 4, 8, 9, 4, 7, 9, 4, 5, 7, 3, 6, 7];
// let sum = 0;

// for (let i = 1; i < a.length; i++) {
//   if (a[i - 1] % 2 === 1) {
//     sum += a[i];
//   }
// }
// console.log("Sum of elements with previous odd number:", sum);

// function isPalindrome(str) {
//   let reversed = str.split('').reverse().join('');
//   return str === reversed;
// }
// function findMax(arr) {
//   let max = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }

//   return max;
// }
// let numbers = [5, 3, 8, 4, 2];
// console.log("Maximum number:", findMax(numbers))

// let text = "madam";
// console.log("Is Palindrome:", isPalindrome(text));

// let anotherText = "hello";
// console.log("Is Palindrome:", isPalindrome(anotherText));

// console.log(1),
// console.log(2),
// setTimeout(()=>{
//   console.log(3)
// },1000);
// setTimeout(()=>{
//   console.log(4)
// },2000);
// console.log(5);
// setTimeout(()=>{
//   console.log(6)
// },0)
// (function(){
//   var a = b = 3;
// })();

// console.log("a defined? " + (typeof a !== 'undefined'));
// console.log("b defined? " + (typeof b !== 'undefined'));
// var myObject = {
//   foo: "bar",
//   func: function() {
//       var self = this;
//       console.log("outer func:  this.foo = " + this.foo);
//       console.log("outer func:  self.foo = " + self.foo);
//       (function() {
//           console.log("inner func:  this.foo = " + this.foo);
//           console.log("inner func:  self.foo = " + self.foo);
//       }());
//   }
// };
// myObject.func();
// function foo1()
// {
//   return {
//       bar: "hello"
//   };
// }

// function foo2()
// {
//   return
//   {

//       bar: "hello"
//   };
// }
// console.log(foo1());
// console.log(foo2());

// function isPalindrome(str) {
//   str = str.replace(/\W/g, '').toLowerCase();
//   return (str == str.split('').reverse().join(''));
// }
// console.log(isPalindrome('madams'));
// var arr1 = "john".split('');
// var arr2 = arr1.reverse();
// var arr3 = "jones".split('');
// arr2.push(arr3);
// console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
// console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));
// console.log(1 +  "2" + "2");
// console.log(1 +  +"2" + "2");
// console.log(1 +  -"1" + "2");
// console.log(+"1" +  "1" + "2");
// console.log( "A" - "B" + "2");
// console.log( "A" - "B" + 2);
// const arr= [
//   {type:'fruit',name:'mango'},
//   {type:'veg',name:'potato'},
//   {type:'fruit',name:'mango'},
//   {type:'veg',name:'spinach'},
// ]
// const out= arr.filter(ele=>ele.type ==='veg');
// console.log(out)

// function findSubarrayWithSum(arr, targetSum) {
//   let start = 0;
//   let end = 0;
//   let currentSum = 0;
//   while (end <= arr.length) {
//     if (currentSum === targetSum) {
//       return arr.slice(start, end);
//     } else if (currentSum < targetSum) {
//       currentSum += arr[end];
//       end++;
//     } else {
//       currentSum -= arr[start];
//       start++;
//     }
//   }
//   return null;
// }
// const arr = [1, 4, 20, 3, 10, 5];
// const targetSum = 33;
// const subarray = findSubarrayWithSum(arr, targetSum);

// console.log(subarray);

// const arr = [7, 5, 8, 2, 4 ];
// const uniqueAppearances = (arr = []) => {
//    const map = {};
//    const set = new Set();
//    for(let i = 0; i < arr.length; i++){
//       const el = arr[i];
//       map[el] = (map[el] || 0) + 1;
//    };
//    for(key in map){
//       const value = map[key];
//       if(set.has(value)){
//          return false;
//       };
//       set.add(value);
//    };
//    return true;
// };
// console.log(uniqueAppearances(arr));

// function modifyArray(arr, callback) {
//   arr.push(100);
//   callback();
// }
// var arr = [1, 2, 3, 4, 5];
// modifyArray(arr, function () {
//   console.log("array has been modified", arr);});
//   // reverse a string
// var string = "Welcome to this Javascript Guide!";
// var reverseEntireSentence = reverseBySeparator(string, "");
// var reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");
// function reverseBySeparator(string, separator) {
//   return string.split(separator).reverse().join(separator);
// }
// console.log( reverseEntireSentence,reverseEachWord);
// class ManageSalaries {
//    constructor() {
//      this.salaryRates = [
//        { id: 1, role: 'developer', rate: 100 },
//        { id: 2, role: 'architect', rate: 200 },
//        { id: 3, role: 'manager', rate: 300 },
//      ];
//    }

//    calculateSalaries(empId, hoursWorked) {
//      let salaryObject = this.salaryRates.find((o) => o.id === empId);
//      return hoursWorked * salaryObject.rate;
//    }
//  }

//  const mgtSalary = new ManageSalaries();
//  console.log("Salary : ", mgtSalary.calculateSalaries(1, 100));
// class Animal{
//    eat() {
//      console.log("Animal Eats")
//    }
//  }
//  class Bird extends Animal{
//    fly() {
//      console.log("Bird Flies")
//    }
//  }

//  var parrot = new Bird();
//  parrot.eat();
//  parrot.fly();
//****    Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5.
// for (let i = 1; i <= 100; i++) {
//    let f = i % 3 == 0,
//      b = i % 5 == 0;
//    console.log(f ? (b ? 'FizzBuzz' : 'Fizz') : b ? 'Buzz' : i);
// }
// method 2
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

// function createCounter() {
//   let count = 0;
//   function increment() {
//     count++;
//   }
//   function decrement() {
//     count--;
//   }
//   function getCount() {
//     return count;
//   }
//   return {
//     increment: increment,
//     decrement: decrement,
//     getCount: getCount,
//   };
// }
// const counter = createCounter();
// console.log(counter.getCount());
// counter.increment();
// counter.increment();
// counter.increment();
// console.log(counter.getCount());
// counter.decrement();
// console.log(counter.getCount());

/* Remove Falsy values in the array*/
// const array = [0, 1, false, 2, '', 3, null, undefined, NaN, 4];
// const filteredArray = array.filter(Boolean);
// console.log(filteredArray);

/* Remove duplicates in the array */

// const array1 = [1, 2, 2, 3, 4, 4, 5,5,6,6,6,7,1,2,0];
// const uniqueArray = [...new Set(array1)];
// console.log(uniqueArray);
// merging two arrays
// var merge = function (nums1, m, nums2, n) {
//   let idx1 = m - 1;
//   let idx2 = n - 1;
//   let mergeIdx = m + n - 1;
//   while (idx1 >= 0 && idx2 >= 0) {
//     if (nums1[idx1] >= nums2[idx2]) {
//       nums1[mergeIdx] = nums1[idx1];
//       idx1--;
//     } else {
//       nums1[mergeIdx] = nums2[idx2];
//       idx2--;
//     }
//     mergeIdx--;
//   }
//   while (idx2 >= 0) {
//     nums1[mergeIdx] = nums2[idx2];
//     idx2--;
//     mergeIdx--;
//   }
// };
// let nums1 = [1, 2, 3, 0, 0, 0];
// let nums2 = [2, 5, 6];

// merge(nums1, 3, nums2, 3);

// console.log(nums1);
// var removeElement = function (nums, val) {
//   let left = 0;
//   let right = nums.length - 1;
//   while (left <= right) {
//     if (nums[left] === val) {
//       [nums[left], nums[right]] = [nums[right], nums[left]];
//       right--;
//     } else {
//       left++;
//     }
//   }
//   return left;
// };

// // Example
// let nums = [3, 2, 2, 3];
// let val = 3;
// let k = removeElement(nums, val);
// console.log("Output:", k, "nums:", nums.slice(0, k));

// var removeDuplicates = function(nums) {
//   let k = 1; 
//   for (let i = 1; i < nums.length; i++) {
//       if (nums[i] !== nums[i - 1]) {
//           nums[k] = nums[i];
//           k++;
//       }  }
//   return k;
// };
// let nums = [1, 1, 2,2,6,87,6];
// let k = removeDuplicates(nums);
// console.log("Output:", k, "nums =", nums.slice(0, k).concat(Array(nums.length - k).fill('_')));
// var majorityElement = function(nums) {
//   let majority = null;
//   let count = 0;
//   for (let i = 0; i < nums.length; i++) {
//       if (count === 0) {
//           majority = nums[i];
//           count = 1;
//       } else if (nums[i] === majority) {
//           count++;
//       } else {
//           count--;
//       }
//   }
//   return majority;
// };
// const nums = [3, 2, 3];
// const result = majorityElement(nums1);
// console.log(result); 

//rotate an array
function rotateArrayRight(nums1, k) {
  const n = nums1.length;
  k = k % n; 


  reverse(nums1, 0, n - 1);
  

  reverse(nums1, 0, k - 1);
  

  reverse(nums1, k, n - 1);
}

function reverse(nums1, start, end) {
  while (start < end) {
    const temp = nums1[start];
    nums1[start] = nums1[end];
    nums1[end] = temp;
    start++;
    end--;
  }
}

// Example usage:
const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
rotateArrayRight(nums, k);
// console.log(nums); 


// Splice
const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.splice(2, 1, "Lemon", "Kiwi");
// console.log(fruits);
//Slice
const fruits1 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
           const citrus = fruits1.slice(1, 3);
          //  console.log(citrus)

function characterCount(str) {
  let count = 1;
  let result = "";

  for (i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      result += str[i] + (count > 1 ? count : "");
      count = 1;
    }
  }
  return result;
}
console.log(characterCount("aaabbcccbbbdh")); 

// Roman to Integer
var romanToInt=function(s){
   const map={
    I:1,
    V:5,
    X:10,
    L:50,
    C:100,
    D:500,
    M:1000
   }
   let total=0;
   for (let i=0;i<s.length;i++){
const current =map[s[i]];
const next=map[s[i+1]];
if(next && current<next){
  total-=current;

}else{
  total +=current
}

   }
   return total
}
console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV")); 








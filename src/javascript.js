//destructiring 

let age=29;
const user={
    name:"Durga",
    age:25
}

const{name,age:userAge}=user
console.log(user)
// two indices of a number
function twoSums(nums,target){
    for (let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i] +nums[j]===target){
                return[i,j];
            }
        }
    }
}
const target=9;
const nums=[2,7,11,90,8]
console.log(twoSums(nums,target))

// first unique character
function firstunique(str){
    for (let i=0; i<str.length;i++){
        if(str.indexOf(str[i])===str.lastIndexOf(str[i])){
            return str[i];
        }
    }
    }
console.log(firstunique("eebbbcccccd"))

// converting array to [ 'JaVaScRiPt', 'DeVeLoPeR' ]
const arr=['javascript','developer']

const result=arr.map(word=>
word.split("")
.map((char,index)=>
index%2===0? char.toUpperCase(): char.toLowerCase()).join(""))

console.log(result)
// Reverse a sring 
function reversesrting(str){
  let reversed="";
  for (let i=str.length-1;i>=0;i--){
    reversed += str[i];
  }
  return reversed
}
console.log(reversesrting("Hello"))


function reverseString1(str) {
  return str.split("").reverse().join("");
}


console.log(reverseString1("react"));


// Palindrome
function isPlaindrome(str){
  const reversed=str.split('').reverse().join('')
  return str===reversed
}
console.log(isPlaindrome("level"))

// Find Max
function findMax(arr){
  return Math.max(...arr)
 
}
console.log(findMax([20,30]))
//remove duplicates

function removeduplicates(arr){
  return [... new Set(arr)]
}
console.log(removeduplicates([20,20,30,30]))

// Char count
function charCount(str){
  const result={};
 
  for (let char of str){
    result[char]= (result[char] || 0)+1;
  }
  return result;
}
console.log(charCount("java"))


function outer(){
  let count = 0;
  return function inner(){
     count ++;
     return count;
  }
}
const counter=outer()
console.log(counter())
// frequency

const arr1=[1,1,1,2,3,3,3,3,3,5,5,5];
function frequency(arr1){
  const freq={};
  for (let item of arr1){
    freq[item]=(freq[item]||0)+1;
  } return freq;
}
console.log(frequency(arr1))

// Anagram
const isAnagram = (a, b) =>
  a.length === b.length &&
  a.split('').sort().join('') === b.split('').sort().join('');
console.log(isAnagram("paris","spair"))


// convert  ["javascript","develper","puzzle"] to [ 'JaVaScRiPt', 'DeVeLpEr', 'PuZzLe' ]
const arrs=["javascript","develper","puzzle"]
const result2=arrs.map(word=>
word.split("").map((char,index)=>
index % 2===0?char.toUpperCase():char.toLowerCase()).join(""))
console.log(result2)


// First Non repeating character

function firstNonRepeatingChar(str) {
  const freq = {};


  // Step 1: Count frequency
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }


  // Step 2: Find first non-repeating character
  for (let char of str) {
    if (freq[char] === 1) {
      return char;
    }
  }


  return null; // if no non-repeating character
}


const string = "eeebbcd";
console.log(firstNonRepeatingChar(string));


// flatten Array


const flatten = arr =>
  arr.reduce(
    (acc, val) =>
      acc.concat(Array.isArray(val) ? flatten(val) : val),
    []
  );


console.log(flatten([1, [2, [3, 4], 5], 6]));
// 
// const user2 = {
// name: "Alice",
// hobbies: ["reading", "gaming"],
// address: {
// city: "New York"
// }
// };
 
// const copy1 = { ...user2 };
// const copy2 = JSON.parse(JSON.stringify(user));
 
// copy1.hobbies.push("coding");
// copy1.address.city = "Los Angeles";
 
// copy2.name = "Bob";
// copy2.address.city = "Chicago";
 
// console.log("Original:", user2);
// console.log("Copy1:", copy1);
// console.log("Copy2:", copy2);
// 
 async function test() {
console.log(1);
await Promise.resolve();
console.log(2);
}
console.log(3);
test();
console.log(4);


// three sums triplets sum is upto 0
function threeSum(nums) {
  nums.sort((a, b) => a - b);
  let result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    // Skip duplicate values for i
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);

        // Skip duplicates safely
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));

// 
function test1(){
  if(true){
    var a=10;
    let b=20;
    const c=30;
  }
  console.log(a);
  console.log(b);
  console.log(c);  
}


function outer() {
    let count = 0;
    return function inner() { 
        count++;
        return count;
        };
        } 
        const fn1 = outer();
        const fn2 = outer(); 
        console.log(fn1()); 
 console.log(fn1()); 
console.log(fn2()); 

console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => console.log("C"));

console.log("D");


const obj = {
  value: 10,
  getValue: function () {
    return this.value;
  }
};

const fn = obj.getValue;
console.log(fn());


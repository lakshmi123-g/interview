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
const expenses = [
  { payer: 'A', amount: 1000, participants: ['A', 'B', 'C', 'D'] },
  { payer: 'B', amount: 400, participants: ['A', 'B', 'C', 'D'] },
  { payer: 'B', amount: 75, participants: ['B', 'C', 'D'] }
];


const personTotal = {};
for (const expense of expenses) {
  for (const participant of expense.participants) {
    if (!personTotal[participant]) {
      personTotal[participant] = 0;
    }
    personTotal[participant] += expense.amount / expense.participants.length;
  }
}


const owes = {};
for (const person in personTotal) {
  for (const payer in personTotal) {
    if (person !== payer) {
      const amountOwed = personTotal[payer] - personTotal[person];
      if (!owes[person]) {
        owes[person] = [];
      }
      if (amountOwed > 0) {
        owes[person].push(`${payer} $${amountOwed.toFixed(2)}`);
      }
    }
  }
}
1.Features of REACT:

   A.i.JSX
    ii.Virtual Dom : When the state of an object changes, the virtual DOM changes only that object in the real DOM, rather than updating all the objects
    iii.componets.
    iv.one way data binding
     v.High performance
------------------------------------------------------------------------------------------------------------------------------------------------------------------------

2. Why use React instead of other frameworks, like Angular?
A: Easy creation of dynamic applications,Improves performance,re-usable components,dedicated tools for easy debugging
------------------------------------------------------------------------------------------------------------------------------------------------------------------------
3.What is the difference between the ES6 and ES5 standards?
A: ES5 :
   var MyComponent= React.createClass({
    render.function(){
        return(
            <h3>HIII</h3>
        )
    }
   })
   ES6: 
    class MyComponent extends React.Component {
        render(){
            return(
                <h3>Hiii</h3>
            )
        }
    }
	------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	
4.What is an event in React?
A:  An event is an action that a user or system may trigger, such as pressing a key, a mouse click, etc.
React events are named using camelCase, rather than lowercase in HTML.
With JSX, you pass a function as the event handler, rather than a string in HTML.
 Ex:  class Simple extends React.Component{
    Work(){
        alert("hiii)
    }
    render()
    return(
        <button onClick={this.work}>Button
        </button>
    )

 }
 ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 5. Explain how lists work in React?
 A:  We create lists in React as we do in regular JavaScript. Lists display data in an ordered format
       The traversal of lists is done using the map() function
       const names=["A","B","c","D","E"]
       const listOfName =()=>{
           const listitems =names.m,ap((name)=>
           <li key={name}>
           {name}</li>);
           return(
            <ul>{listitems}</ul>
           )
       }
	   ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
6.What's the difference between .call and .apply?
Both .call and .apply are used to invoke functions and the first parameter will be used as the value  this within the function. However, .call takes in comma-separated arguments as the next argument while .apply taking in an array of arguments as the next argument. An easy way to remember this is C for call comma-separated and A for apply an array of arguments.

function add(a, b) {
  return a + b;
}
console.log(add.call(null, 1, 2)); // 3
console.log(add.apply(null, [1, 2])); // 3
------------------------------------------------------------------------------------------------------------------------------------------------------------------------
7. Explain Function.prototype.bind?
A.The bind() the method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called
------------------------------------------------------------------------------------------------------------------------------------------------------------------------
8.What's a typical use case for anonymous functions?
They can be used in IIFEs to encapsulate some code within a local scope so that variables declared in it do not leak to the global scope.

(function() {
  // Some code here.
})();
As a callback that is used once and does not need to be used anywhere else. The code will seem more self-contained and readable when handlers are defined right inside the code calling them, rather than having to search elsewhere to find the function body.

setTimeout(function() {
  console.log('Hello world!');
}, 1000);
Arguments to functional programming constructs or Lodash (similar to callbacks).

const arr = [1, 2, 3];
const double = arr.map(function(el) {
  return el * 2;
});
console.log(double); // [2, 4, 6]
------------------------------------------------------------------------------------------------------------------------------------------------------------------------

9. Explain the differences on the usage of foo between function foo() {} and var foo = function() {}
The former is a function declaration while the latter is a function expression. The key difference is that function declaration have its body hoisted but the bodies of function expressions are not (they have the same hoisting behavior as variables). If you try to invoke a function expression before it is defined, you will get an Uncaught TypeError: XXX is not a function error.

Function Declaration

foo(); // 'FOOOOO'
function foo() {
  console.log('FOOOOO');
}
Function Expression

foo(); // Uncaught TypeError: foo is not a function
var foo = function() {
  console.log('FOOOOO');
};
------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 10.What is Coercion in JavaScript?
In JavaScript conversion between different two build-in types called coercion. Coercion comes in two forms in JavaScript: explicit and implicit.
Here's an example of explicit coercion:
var a = "42";
var b = Number( a );
a;				// "42"
b;				// 42 -- the number!
And here's an example of implicit coercion:
var a = "42";
var b = a * 1;	// "42" implicitly coerced to 42 here
a;				// "42"
b;				// 42 -- the number!
------------------------------------------------------------------------------------------------------------------------------------------------------------------------
11. What does the term Transpiling stand for?
A. Transpiling in JavaScript stands for "source-to-source compilation." It is the process of converting the source code written in one version of JavaScript (or another programming language) into an equivalent version of JavaScript that is compatible with a different version of the language or with a different runtime environment.
The most common use case of transpiling in JavaScript is to convert code written in the latest version of ECMAScript (ES6 or ES2015 and beyond) into an older version (such as ES5) that can be executed by older web browsers that may not support the latest features and syntax.
12. What is the new keyword in JavaScript?
It creates a new object. The type of this object is simply object.
It sets this new object's internal, inaccessible, [prototype] (i.e.__proto__) property to be the constructor function's external, accessible, prototype object (every function object automatically has a prototype property).
It makes the this variable point to the newly created object.
It executes the constructor function, using the newly created object whenever this is mentioned.
It returns the newly created object, unless the constructor function returns a non-null object reference. In this case, that object reference is returned instead.
Consider:
function New(func) {
    var res = {};
    if (func.prototype !== null) {
        res.__proto__ = func.prototype;
    }
    var ret = func.apply(res, Array.prototype.slice.call(arguments, 1));
    if ((typeof ret === "object" || typeof ret === "function") && ret !== null) {
        return ret;
    }
    return res;
}
------------------------------------------------------------------------------------------------------------------------------------------------------------------------
13.Is JavaScript a pass-by-reference or pass-by-value language?
A: JavaScript is a pass-by-value language, but the way values are passed can sometimes lead to confusion.
When passing primitive data types (like numbers, strings, booleans) as function arguments, JavaScript passes a copy of the value. This behavior is known as "pass-by-value."
However, when passing objects (including arrays and functions) as function arguments, JavaScript passes a copy of the reference to the object, not a copy of the actual object itself. This can lead to the perception that JavaScript is "passing by reference" for objects, but in reality, it's still passing a value (the reference to the object).
Let's illustrate this with an example:
function modifyPrimitive(x) {
  x = 42;
}
function modifyObject(obj) {
  obj.prop = "modified";
}
let num = 10;
modifyPrimitive(num);
console.log(num);  // Output: 10 (unchanged)
let obj = { prop: "original" };
modifyObject(obj);
console.log(obj.prop);  // Output: "modified"
In the example, `modifyPrimitive` does not change the value of the original `num` variable because it received a copy of the primitive value. On the other hand, `modifyObject` modifies the property of the original `obj` variable because it received a copy of the reference to the object.
So, while JavaScript behaves like pass-by-value for primitives and pass-by-reference for objects, it's important to understand that it's always passing a value, even for objects. This distinction can be especially important when dealing with mutable objects and functions that modify their arguments.
14. How to deep-freeze objects in JavaScript?
A: In JavaScript, you can use the Object.freeze() method to freeze an object, preventing any further modifications to its properties, including adding, removing, or updating properties. However, Object.freeze() only performs a shallow freeze, which means that it only affects the top-level properties of the object. If the object contains nested objects or arrays, those nested structures are not automatically frozen.
function deepFreeze(obj) {
  // First, freeze the top-level object
  Object.freeze(obj);

  // Iterate through all properties of the object
  for (let key in obj) {
    if (obj.hasOwnProperty(key) && typeof obj[key] === 'object') {
      deepFreeze(obj[key]); // Recursively freeze nested objects
    }
  }

  return obj;
}

// Example usage:
const objToFreeze = {
  prop1: 'value1',
  prop2: {
    nestedProp1: 'nestedValue1',
    nestedProp2: {
      deeplyNestedProp: 'deeplyNestedValue'
    }
  }
};

const frozenObj = deepFreeze(objToFreeze);

// Attempt to modify properties (these will not throw errors in strict mode)
frozenObj.prop1 = 'new value';  // No effect
frozenObj.prop2.nestedProp1 = 'new nested value';  // No effect
15.Why do we use the word “debugger” in javascript?
The debugger for the browser must be activated in order to debug the code. Built-in debuggers may be switched on and off, requiring the user to report faults. The remaining section of the code should stop execution before moving on to the next line while debugging.
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 16.Can you explain the concept of debouncing and throttling in JavaScript? When would you use each technique?
 A. 1. Debouncing:
Debouncing involves delaying the execution of a function until after a specified period of inactivity has passed since the last time the event occurred. In other words, if the event continues to occur within the specified delay, the function execution is postponed until there's a pause in the events.
Here's an analogy: Think of a light switch with a delay before it turns on after you flip it. If you keep flipping the switch within the delay period, the light won't turn on. Only when you stop flipping and wait for the delay to pass, the light will finally turn on.
When to use debouncing:
Use debouncing when you want to handle events that might fire rapidly, but you're only interested in the final state or outcome. Common use cases include:
Search input: To trigger a search only after the user has stopped typing.
Resize events: To respond to window resizing, but only once the user has finished resizing.
Scrolling: To perform an action (like loading more content) once scrolling has paused.
2. Throttling:
Throttling involves limiting the rate at which a function can be executed. It ensures that the function is executed at a controlled, fixed interval between invocations, regardless of how often the event is triggered.
Continuing with the analogy: Imagine a water tap that releases water in short bursts with a fixed delay in between. Even if you keep turning the tap on, it only lets out water at a steady rate.
When to use throttling:
Use throttling when you want to ensure that a function is executed at a consistent interval, preventing it from being called too frequently. Common use cases include:
Preventing button double-clicks: To ensure a button's action can't be triggered multiple times in quick succession.
Mousemove events: To limit the frequency of updates based on mouse movement.
Sending requests to a server: To avoid overloading the server with too many requests in a short span.
In JavaScript, you can implement debouncing and throttling using techniques such as timers, closures, and event listeners. Libraries like Lodash also provide pre-built debounce and throttle functions that make implementation easier.
Remember that the choice between debouncing and throttling depends on the specific behavior you want to achieve. Debouncing delays the function execution until a pause, while throttling limits the rate of execution to a set interval. Consider the context and the user experience to determine which technique is more suitable for your use case.
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
17.Difference between undefined and null?
A. 1.undefined is a variable that has been declared but hasn't been given a value yet or when accessing non-existing properties.
  2.null is a value that represents the intentional absence of a value or the lack of an object value

18. What is Event Propagation.
A.Event propagation in JavaScript refers to the order in which events are dispatched, captured, and bubbled through the DOM hierarchy. There are two main phases of event propagation: capturing phase and bubbling phase.
Events can be added to a parent element instead of adding to every single element.
1. **Capturing Phase:**
During the capturing phase, the event starts from the root of the DOM hierarchy and travels down to the target element. This phase is less commonly used and generally happens before the bubbling phase. Not all events have a capturing phase.

2. **Target Phase:**
The event reaches the target element where the event occurred.
3. **Bubbling Phase:**
After the target phase, the event starts to bubble up through the DOM hierarchy, triggering handlers on ancestor elements one by one until it reaches the root.
Here's how event propagation works in JavaScript:
<div id="outer">
  <div id="middle">
    <button id="inner">Click me</button>
  </div>
</div>
document.getElementById('outer').addEventListener('click', () => {
  console.log('Outer div clicked');
}, true); // true indicates capturing phase

document.getElementById('middle').addEventListener('click', () => {
  console.log('Middle div clicked');
}, true);

document.getElementById('inner').addEventListener('click', () => {
  console.log('Inner button clicked');
});
- In this example, when you click the "Click me" button, the capturing phase occurs first (`outer` → `middle`), followed by the target phase (`inner`), and finally the bubbling phase (`middle` → `outer`).
- If you remove `true` from the outer and middle event listeners, they will use the default bubbling phase, and the order of console logs will change.
You can also stop the propagation of an event using the `stopPropagation()` method within an event handler:
document.getElementById('inner').addEventListener('click', (event) => {
  console.log('Inner button clicked');
  event.stopPropagation(); // Stops further propagation
});
Understanding event propagation is crucial for effective event handling in complex UIs. It allows you to create more flexible and organized event handling mechanisms by capturing events at different levels of the DOM hierarchy.
--------------------------------------------------------------------------------------------------------------------------------------------------------

18. what is a progressive web application ?
A progressive web app (PWA) is an app that's built using web platform technologies, but that provides a user experience like that of a platform-specific app.

19. What is Authentication and Authorization?
Authentication is the process of verifying  Who the User is and authorization is the process of verifying  what they have access  to .
20. Difference between splice() and slice() ?
   Splice : splice() changes the contents of the original array. Parameters - slice() takes two optional params, begin & end indexes.
   Example: 
   const fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits.splice(2, 1, "Lemon", "Kiwi");
   console.log(fruits);
   Slice:  The slice() method returns selected elements in an array, as a new array. 
   Example: const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
           const citrus = fruits.slice(1, 3);
           console.log(citrus)

21. What is Single Page Application?
A.An SPA (Single-page application) is a web app implementation that loads only a single web document, 
and then updates the body content of that single document via JavaScript APIs such as Fetch when different content is to be shown.

22. What are characteristics of controlled components?
A. 1. State Control: The value of the form element is stored in the component's state.
2. Event Handling: Changes to the form
element trigger an event (e.g., onChange
for input fields).
3. State Update: The event handler updates          
the component's state with the new value
of the form element.
4. Re-rendering: The component re-renders
with the updated state, and the form
element reflects the new value.
23. Q. What are the advantages of using controlled components in React forms?
 Top 3 benefits of using controlled components in React forms:
1. In controlled components, form elements have their values
managed by React state, ensuring a single source of truth.
2. This approach facilitates predictable and synchronized updates,
making it easier to implement features such as form validation,
and dynamic rendering, and seamless integration with React's
lifecycle methods.
3. Controlled components offer better control and maintainability
compared to uncontrolled components, making them the best
practice for handling forms in React applications.
24  what is code splitting?
❖ Code splitting is a technique to split the JavaScript
bundle into smaller chunks, which are loaded ondemand. 

25. How to Implement Code Splitting in React?
❖ 3 steps for Code splitting in React:
1. Use React.lazy() to lazily import components.
2. Wrap components with Suspense to handle loading.
3. Configure your build tool (e.g., Webpack) for dynamic imports. 

26.What is the role of Lazy and Suspense methods in React?
❖ React.lazy is a function that allows you to
load a component lazily.
❖ It enables code splitting by allowing you
to import a component asynchronously/
dynamically, meaning component is
loaded only when needed only.
❖ The Suspense component is used to
display a fallback UI while the lazily
loaded component is being fetched.

27.  What is the role of the import() function in code splitting?
❖ The import() function returns a promise that allow dynamic loading of modules.

28. What is the purpose of the fallback prop in Suspense?
❖ The fallback prop provides a loading  indicator or UI while the dynamically  imported component is being loaded.

29.  How do you inspect and analyze the generated chunks in a React application?
❖ Use tools like Webpack Bundle Analyzer to analyze the size and composition of chunks.

30. What is a Higher-Order Component in React?
❖ A Higher-Order Component is a component which takes another component as an argument and adds extra features to another component.
❖ HOC can be used for providing logging functionality to all the components in a reusable way

31. Difference between Action Creators, Action Object & Action Type?
❖ Action creator functions are functions that create and return action objects.
❖ Action object are plain JavaScript objects returned by action creator functions.
❖ An action type is a string constant that defines the type of action.

32. What is boiler plate code in React?
A. Boilerplate code is a section of code that can be reused in multiple places with little to no change.

33. Explain the concept of immutability in the context of Redux?
❖ In Redux, immutability is the principle that once an object (such as the state which is readonly) is created, it cannot be changed or modified directly.
❖ To make changes to the state, you need to dispatch an action.

34. what is  mapDispatchToProps & mapStateToProps in the connect?
❖ mapDispatchToProps() function dispatches action to the store to update the state using a reducer.
❖ mapStateToProps() function gets the state for the component from Redux store.

35. Bubble sort in JSX
A: function bubbleSort(array) {
    const arrayLength = array.length;
    let isSwapped;
    for (let i = 0; i < arrayLength; i++) {
        isSwapped = false;

        for (let j = 0; j < arrayLength - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                // Swap elements
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                isSwapped = true;
            }
        }
        // If no two elements were swapped in the inner loop, array is sorted
        if (!isSwapped) 
            break;
    }
    return array;
}
// Test the function
const sortedArray = bubbleSort([45, 23, 3, 5346, 5, 356, 243, 35]);
console.log("Sorted Array:");
console.log(sortedArray);

36.How do you ensure code immutability in React.js using Immutable.js?
A.To ensure code immutability in React.js, we can use Immutable.js library which provides immutable data structures.
 We can create immutable objects using the Immutable.js library and use them in our React components. 
 This ensures that the state of the object cannot be changed directly, and any changes made to the object will create a new object. 
This helps in avoiding any unexpected changes to the state of the object and makes the code more predictable and easier to debug.

 37.How do you optimize the performance of React.js applications?
A.To optimize the performance of React.js applications, we can follow some best practices like using shouldComponentUpdate() lifecycle
 method to avoid unnecessary re-renders, using React.memo() to memoize components, 
using PureComponent for class components, and using functional components wherever possible.
 We can also use tools like React Developer Tools to identify performance bottlenecks and optimize the code accordingly.
38. 
How do you handle errors in React.js applications?
A.To handle errors in React.js applications, we can use error boundaries which are components that catch JavaScript errors anywhere in their child component tree 
and display a fallback UI instead of crashing the whole application. We can also use try-catch blocks to catch errors in specific parts of the code and handle them accordingly. 
Additionally, we can use tools like Sentry or Bugsnag to track errors and get notified when they occur.




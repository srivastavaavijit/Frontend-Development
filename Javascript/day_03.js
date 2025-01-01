// // Non-Primitive data types: Array, Object, Function.

// // Array: In javascript, array can store hetrogeneous datatypes.
// let arr = [10, 20, 50, "Rohit", "Mohit"];
// console.log(arr);
// console.log(typeof(arr));  // Typeof array is "object".

// // Object: It occurs in key-value pairs. It is used to store similar types of information at a place.
// let obj = {
//     user_name : "Rohit",
//     account_num : 2469229739214,
//     balance : 420
// };
// console.log(obj);
// console.log(typeof(obj));

// // Function:  In javascript, function can be stored in a variable.
// let fun = function(){
//     console.log("Hello, Coder Army!")
// }
// fun();
// console.log(typeof(fun))

// // Type Conversion:

// // String to Number:
// let account_balance = "100";
// let num = Number(account_balance);

// console.log(num);

// let account = "100xs";
// console.log(Number(account));  // it will produce output Nan: Not a number, as xs cannot be converted into number.

// // Boolean to Number:
// let x = false;
// console.log(Number(x)); // True -> 1 And False -> 0.

// // Null: It will always produce 0 when converted into number.
// let y = null;
// console.log(Number(y));

// // Undefined: It will always produce Nan when converted to number.
// let z;
// console.log(Number(z));

// // Number to String:
// let a = 20;
// console.log(String(a));

// // Boolean to String:
// let b = false;
// console.log(String(b));

// // String to Boolean:
// let str = " ";
// console.log(Boolean(str));


// Operators:

// // Arithmetic Operators:
// console.log(((6*3)+(18/6))-9);
// console.log(20 % 3);

// // ++ Increment Operaror, -- Decrement Operator:
// let sum = 20;
// let j = ++sum;
// console.log(sum);
// console.log(j);
// let p = sum--;
// console.log(p);
// console.log(sum);

// Assignment Operators:
let x = 20;
console.log(x);
let j = 0;
j += x;
console.log(j);
let p = 1;
p *= x;
console.log(p);
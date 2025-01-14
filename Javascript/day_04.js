// About strings:

// Creating a string:

// 1. Using String Literal:
let str = "Hello";
console.log(str);

// 2. Using String Constructor: It'll create string object.
let str2 = new String("Hey");
console.log(str2); 

// #. String Interpolation: Used for dynamic string creation.
let str3 = `${str}, world!`;
console.log(str3);


// String Methods:

// 1. Finding length of a string:
console.log(str.length);

// 2. slice(startingIndex, endingIndex) method: Used to find portion of a string. Also, it supports negative indexes.
console.log(str.slice(0,3))
console.log(str.slice(-1));

// 3. substring(startIndex, endIndex) method: Used to find portion of a String. It does not support negative indexes.
console.log(str.substring(0,3));
console.log(str.substring(-1));

// 4. substr(start, length) method: Used to find portion of a String. "length" denotes the size of the string you wanted.
console.log(str.substr(2,3));

// 5. replace(value1, value2):
let a = "hello, world, hello";
let b = a.replace("hello", "Hey");
console.log(b);

// 6. replaceAll(value1, value2):
let c = a.replaceAll("hello", "hey");
console.log(c);

// 7. toUpperCase():
a = a.toUpperCase(); // a new string is created and then assigned to a, and hence, the previous string remains unchanged.
console.log(a);

// 8. toLowerCase():
let p = "HELLO, WORLD";
console.log(p.toLowerCase());

// 9. trim(): Used to remove whitespaces from both end of the String.
let q = "hello      ";
console.log(q.length);
let z = q.trim();
console.log(z.length);

// 10. charAt(index): Used to find character at specified index.
console.log(str.charAt(0));

// 11. charCodeAt(index): Used to find unicode value of the specified character at the index.
console.log(q.charCodeAt(0));

// 12. split(separator, limit): Used to divide string based on separator provided.
console.log("Hello and welcome to Javascript".split(" ")); 
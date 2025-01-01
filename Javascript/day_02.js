// About Datatypes:

// Datatypes: Number, boolean, string, null, undefined, symbol, bigint

// Number:
let account_balance = 20;
console.log(typeof(account_balance));

// String: " " or ' ' both can be used.
let str = "Rohit is a bad boy, he doesn't know, how to use zoom.";
console.log(str);
console.log(typeof(str));

// Boolean: value can be either true or false.
let statement = true;
console.log(statement);
console.log(typeof(statement));

// Undefined: when value is not assigned to variable, it is said to be undefined i.e., no value is stored.
let account;
console.log(account);

// Null: It states that intentionally no value is stored in the variable.
let balance = null;
console.log(balance);
// Null is a datatype, but it shows object as a type and hence, it's an error.
console.log(typeof(balance));

// Bigint: Used to store very large number:
// let a = 12331496411428962315681253097;  It will wrap up the values.
let a = 12331496411428962315681253097n; // 'n' indicates big-integer.
console.log(a);

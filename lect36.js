// by value (primitives)
var a = 3;
var b;

b = a;
a = 2;

console.log(a);
console.log(b);

// by value as a parameter
function changeVal(n) {
    a = 99;
    return a;
}

changeVal(a);
console.log(a);
console.log(b);

// by reference (all objects (including functions))
var c = { greeting: 'hi' };
var d;

d = c;
c.greeting = 'hello'; // mutate

console.log(c);
console.log(d);

// by reference (even as parameters)
function changeGreeting(obj) {
    obj.greeting = 'hola'; // mutate
}

changeGreeting(d);
console.log(c);
console.log(d);

// equals operator sets up a new memory space (new address)
c = { greeting: "Hello fine sir" };
console.log(c);
console.log(d);
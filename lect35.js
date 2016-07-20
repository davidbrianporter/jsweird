greet();

function greet() {
    console.log('hi');
}

var anonymousGreet = function() {
    console.log('hi');
}

anonymousGreet();

/*function log(a) {
    console.log(a);
}*/

var b = {
    greeting: 'hi'
};
//log(b.greeting);

function log(a) {
   a();
}

log(function() {
    console.log('Ima function inside a call to a function')
});
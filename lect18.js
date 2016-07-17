// Lecture 18
// Asyncronous - more than one at a time
// Asyncrouous Callbacks - 

// long running function 
function waitThreeSeconds() {
    var ms = 3000 + new Date().getTime();
    while (new Date() < ms){}
    console.log('click event!');
}

// listen for the click event
document.addEventListener('click', clickHandler);


waitThreeSeconds();
console.log('finished execution');
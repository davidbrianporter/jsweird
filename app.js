function a() {

    function b() {
        console.log(myVar);
    }

    var myVar = 2;
    b();
}

var myVar = 1;
a();

{
//    console.log(e);
    let e = "I exist";
    console.log(e);
}
//console.log(e);
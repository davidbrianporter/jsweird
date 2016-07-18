var objectLiteral = {
    firstName: "David",
    isProgrammer: true
}

console.log(JSON.stringify(objectLiteral));

var jsonValue = JSON.parse('{ "firstName": "david", "isProgrammer": true }');

console.log(jsonValue);
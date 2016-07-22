function makeGreeting(language) {
    return function(firstname, lastname) {

        if (language === 'en') {
            console.log('Hello ' + firstname + ' ' + lastname);
        }

        if (language === 'fr') {
            console.log('Bonjour ' + firstname + ' ' + lastname);
        }
    }
}

var greetEnglish= makeGreeting('en');
var greetFrench = makeGreeting('fr');

greetEnglish('en');
greetFrench('fr');

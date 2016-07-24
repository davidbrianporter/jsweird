function makeGreeting(language) {

    return function(firstname, lastname) {

        if (language === 'en') {
            console.log('Hello ' + ' ' + firstname + ' ' + lastname);
        }

        if (language === 'es') {
            console.log('hola' + ' ' + firstname + ' ' + lastname);
        }
    }
}

var greetEnglish = makeGreeting('en');

greetEnglish('DAvid','porter');
makeGreeting('en')('da','p');
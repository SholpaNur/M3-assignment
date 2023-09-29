let lg = prompt("choose language from es, de, en, fr (default is en)");
let hello, lang;
if (lg === "es") {
    hello = 'Hola mundo';
    lang = 'Spanish'
} else if (lg === "fr") {
    hello = "Bonjour le monde";
    lang ='French'
} else if (lg === "de") {
    hello = "Hallo welt";
    lang='German'
} else {
    hello = "Hello World"
    lang = "English"
};

console.log(`Hello World translated in ${lang} is: ${hello}`)


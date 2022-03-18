/**
 * @type { String | Number }
 */
let myString = "Hello";

console.log(myString);

myString = null;




/**
 * Must only log "Hello, world!" or "Hi, world!".
 * @param { "Hello" | "Hi" } intro
 */
const helloWorld = intro => console.log(intro + ", world!");

helloWorld("Hello");    // ok
helloWorld("Hi");       // ok
helloWorld("Hallo");    // not ok

// more examples of good jsDoc see
// https://webengineering-fhnw.github.io/Kolibri/

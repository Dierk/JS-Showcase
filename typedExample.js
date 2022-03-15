
let myString = "Hello";

console.log(myString);

myString = 0;




/**
 * Must only log "Hello, world!" or "Hi, world!".
 */
const helloWorld = intro => console.log(intro + ", world!");

helloWorld("Hello");    // ok
helloWorld("Hi");       // ok
helloWorld("Hallo");    // not ok

// more examples of good jsDoc see
// https://webengineering-fhnw.github.io/Kolibri/

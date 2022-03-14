// requires lambda.js

const ok = [];

// id
// ok.push( id(id) === id );
// ok.push( id(1)  ===  1 );

// konst
// ok.push( fst(42)(0) === 42 );

// const answer = fst(42);
// ok.push( answer(1)     === 42 );
// ok.push( answer(null)  === 42 );

// snd
// ok.push( snd(null)(42) === 42 );


// const dierk = Pair("Dierk")("König"); // immutable
// ok.push( dierk(firstname) === "Dierk");
// ok.push( dierk(lastname)  === "König");

// // tuple
// const [Person, fn, ln, ag] = Tuple(3);
// const person = Person("Dierk")("König")(53);
// ok.push( person(fn) === "Dierk");
// ok.push( person(ln) === "König");
// ok.push( person(ag) === 53);

// // either

// const safeDiv = num => divisor =>
//     divisor === 0
//     ? Left("schlecht!")
//     : Right(num / divisor);

// either (safeDiv(1)(1))
//       ( x => console.error(x))
//       ( x => console.log(x));

//
// const [Cash, CreditCard, Invoice, PayPal, pay] = Choice(4);
// const cash = Cash ();
// const card = CreditCard ("0000-1111-2222-3333");
// const invo = Invoice    ({name:"Roger", number:"4711"});
// const pal  = PayPal     (person);  // the payload can be a partially applied function, e.g. Tuple ctor
// const doPay = method =>
//     pay (method)
//         ( _       => "paid cash")
//         ( number  => "credit card "+number)
//         ( account => account.name + " " + account.number )
//         ( person  => "pal: " + person(fn) );
//
// ok.push( doPay(cash) === "paid cash");
// ok.push( doPay(card) === "credit card 0000-1111-2222-3333");
// ok.push( doPay(invo) === "Roger 4711");
// ok.push( doPay(pal ) === "pal: Dierk");




// test result report
if ( ok.every( elem => elem) ) {
    document.writeln("All "+ ok.length +" tests ok.");
} else {
    document.writeln("Not all tests ok! Details:\n");
    ok.forEach((result, i) =>
        document.writeln("  Test "+ i + (result ? " ok" : " failed"))
    );
}

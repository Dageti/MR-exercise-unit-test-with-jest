// import the function sum from the app.js file
const { sum } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});
test("One dollar should be 153.48 yen", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js')

    // use the function like its suppoed to be used
    const yens = fromDollarToYen(3.5)

    // if 1 dolar are 153.48 yen, then 3.5 dollar should be (3.5 * 153.48)
    const expected = 3.5 * 1.2 * 127.9; 
    
    // this is the comparison for the unit test
     expect(fromDollarToYen(1)).toBe(153.48); //1 dollar is equivalent to 1 * 1.2 * 127.9 yen (153.48)
})
test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})


test("One yen should be  pound", function(){
    //import the function from app.js
    const { fromYenToPound } = require('./app.js')

    // use the function like its suppoed to be used
    const pounds = fromYenToPound(3.5)

    // if 1 yen are 9.77x10^-3 pounds, then 3.5 yen should be (3.5/ 127.9)/0.8
    const expected = (3.5 / 127.9)/0.8; 
    
    // this is the comparison for the unit test
     expect(fromYenToPound(3.5)).toBe(0.03420641125879593); //1000 yen are 9.77326036 pounds, then 3.5 yen should be = 0.03420641125879593
})
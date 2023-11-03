const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14,9);

    expect(total).toBe(23);
})

test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("One dolar should be approximately 146.2 Japan yens", function() {
    const { fromDollarToYen } = require('./app.js');
    const yens = fromDollarToYen(5);
    const euro = 5 / 1.07;
    const yensExpected = euro * 156.5;
    expect(fromDollarToYen(5)).toBe(731.3084112149533);
})

test("One thousand yens should be approximately 5.5 british pounds", function() {
    const { fromYenToPound } = require('./app.js');
    const pounds = fromYenToPound(1000);
    let euro = 1000 / 156.5; 
    const poundsExpected = euro * 0.87;
    expect(fromYenToPound(1000)).toBe(5.559105431309905);
})
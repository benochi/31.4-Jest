/* 
NAME_OF_FILE.test.js
can place in same directory as other files. app.test.js
otherwise can put in folder that is named __tests__
write inside of callback for function called test
 */
//run from same directory, type 'jest' to run. 
//or run single test, square.test.js

//if add.js has add function. 
const { add } = require("./add"); //import functions for testing
const { square } = require('./square');

test('add should return sum', function(){
    let sum = add(2, 3);
    expect(sum).toEqual(5);
});

test('square should square a number', function(){
    const res = square(3);
    expect(res).toEqual(9);
});

//DESCRIBE -  group tests together by function "square"
describe("square function", function() {
    test('square should square a number', function(){
        const num = square(3);
        expect(num).toEqual(9);
    })
    test('square should square a number', function(){
        const num = square(3);
        expect(num).toEqual(9);
    })
})

//MATCHERS
.toEqual(obj)//same value
.toBe(obj)//different objects with same value do not
.toContain(obj)//obj/array contains item?
.not./*add before matchers*/toEqual("bye")
.toBeCloseTo(int)//good for float objects
.toMatch("string")//working with strings to match chars
expect.any(type)//will look for a type: int, string, etc. 
test("random toy", function(){
    let toy = getRandomToy();
    expect(toy).toEqual({
        toy: {
            name: expect.any(String),
            price: 34.99
        }
    });
});
test('numberCheck', function(){
    const numLives = 9;
    expect(numLives).not.toEqual(8);
    expect(numLives).not.toEqual(expect.any(array)) 
})

//BEFORE / AFTER
//can put these outside of "Describe" and just in the test file.
descripe('name', function(){
    let cart;

    beforeEach(function(){ //can assign a variable a value for every function. 
        console.log("before each")
        cart = [
            { item: 1,
            item: 2,
        item:3}
        ]
    });
    beforeAll(function(){
        console.log("before all")
    });
    afterAll(function(){
        console.log("after all");
    })
    //also beforeAll and afterAll

    afterEach(function(){
        console.log("After each");
    })

    test('functionName', function(){
        const total = getCartTotal(cart);
        expect(total).toBe(104.87);
    });
    test('functionName', function(){
        const total = getCartTotal(cart / 2);
        expect(total).toBe(52.43);
    });
});
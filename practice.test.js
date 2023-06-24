const practice = require("./practice");

test("A capitalize function that takes a string and returns it with the first character capitalized", () => {
    expect(practice.capitalize("this is a test")).toBe("This is a test");
});

test("A reverseString function that takes a string and returns it reversed.", () => {
    expect(practice.reverseString("this is a test")).toBe("tset a si siht");
});

test("A calculator object that contains functions for the basic operations: ADD", () => {
    expect(practice.calculator.add(1,1)).toBe(2);
});

test("A calculator object that contains functions for the basic operations: SUBTRACT", () => {
    expect(practice.calculator.sub(2,1)).toBe(1);
});

test("A calculator object that contains functions for the basic operations: MULTIPLY", () => {
    expect(practice.calculator.mul(2,3)).toBe(6);
});

test("A calculator object that contains functions for the basic operations: DIVIDE", () => {
    expect(practice.calculator.div(10,2)).toBe(5);
});

test("A caesarCipher function that takes a string and returns it with each character “shifted”", () => {
    expect(practice.caesarCipher("Zebra!")).toBe("Afcsb!");
});

test("An analyzeArray function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.", () => {
    expect(practice.analyzeArray([1,8,3,4,2,6])).toStrictEqual({average: 4, min: 1, max: 8, length: 6});
});

test("An analyzeArray function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.", () => {
    expect(practice.analyzeArray([1,1,1])).toStrictEqual({average: 1, min: 1, max: 1, length: 3});
});

test("An analyzeArray function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.", () => {
    expect(practice.analyzeArray([0])).toStrictEqual({average: 0, min: 0, max: 0, length: 1});
});

test("An analyzeArray function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.", () => {
    expect(practice.analyzeArray([-1, -1, 1, 1])).toStrictEqual({average: 0, min: -1, max: 1, length: 4});
});
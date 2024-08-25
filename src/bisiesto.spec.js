import isLeapYear from "./bisiesto.js";

describe("FizzBuzz", () => {
    it("El año ingresado no sigue ningua regla", () => {
        expect(isLeapYear(2000)).toEqual("Yes");
    });
    
});
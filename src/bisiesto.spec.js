import isLeapYear from "./bisiesto.js";

describe("FizzBuzz", () => {
    it("El año ingresado no sigue la regla de: Es bisiesto :Divisible entre 400:", () => {
        expect(isLeapYear(2000)).toEqual("Yes");
    });
    
    it("El año ingresado no sigue la regla de: No es bisiesto :Divisible entre 100 pero no entre 400:", () => {
        expect(isLeapYear(1800)).toEqual("No");
    });

    it("El año ingresado no sigue la regla de: Es bisiesto :Divisible entre 4 pero no entre 100:", () => {
        expect(isLeapYear(2016)).toEqual("Yes");
    });

    it("El año ingresado no sigue la regla de: No es bisiesto :No divisible entre 4:", () => {
        expect(isLeapYear(2019)).toEqual("No");
    });

});
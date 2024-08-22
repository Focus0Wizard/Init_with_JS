import generarFizzBuzz from "./fizzBuzz";

describe("FizzBuzz", () => {
    it("generar el mismo numero si no sigue ninguna regla", () => {
        expect(generarFizzBuzz(1)).toEqual("1");
    });

    it("generar el mismo numero si no sigue ninguna regla", () => {
        expect(generarFizzBuzz(2)).toEqual("2");
    });

    it("generar el Fizz para el 3", () => {
        expect(generarFizzBuzz(3)).toEqual("Fizz");
    });

    it("generar el Fizz para el multiplos de 3", () => {
        expect(generarFizzBuzz(9)).toEqual("Fizz");
    });

    it("generar el Buzz para el 5", () => {
        expect(generarFizzBuzz(5)).toEqual("Buzz");
    });

    it("generar el Buzz para los multiplos de 5", () => {
        expect(generarFizzBuzz(10)).toEqual("Buzz");
    });
});
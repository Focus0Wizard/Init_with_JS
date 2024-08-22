import saludador from "./saludador"

describe("saludar", () => {

    it("Hola Sr. Juan" , () => {
    let saludo = saludar("Juan", "Male", "spanish")
    expect(saludo).toEqual("Hola Sr. Juan");
    });
});
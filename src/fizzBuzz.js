function generarFizzBuzz(number) {

    if(number%3 === 0 && number%5 ===0 ){
        return "FizzBuzz" 
    }
    if (number%3 === 0){
        return "Fizz"
    }else if(number%5 === 0) {
        return "Buzz"
    }
    
    return number.toString()
}

function recorrer(lenght) {
    let cad = ""
    for(let i = 1; i <= lenght; i++){
        cad += generarFizzBuzz(i)
        
    }
    return cad
}

export {generarFizzBuzz, recorrer }



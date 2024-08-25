function isLeapYear(year) {
    let resp;
    
    if(year % 400 === 0){
        resp = "Yes"
    }

    return resp
}

export default isLeapYear

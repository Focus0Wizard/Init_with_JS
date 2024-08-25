function isLeapYear(year) {
    let resp;
    
    if(year % 400 === 0){
        resp = "Yes"
    }else if(year % 100 === 0 && year % 400 != 0){
        resp = "No"
    }else if(year % 4 === 0 && year % 100 != 0){
        resp = "Yes"
    }else if(year % 4 != 0){
        resp = "No"
    }

    return resp
}

export default isLeapYear

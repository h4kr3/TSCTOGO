function taxCalc(number :number,taxYear =2022){
    if(taxYear < 2022)
        return number * 1.2
    return number * 1.3
}

taxCalc(10_000)
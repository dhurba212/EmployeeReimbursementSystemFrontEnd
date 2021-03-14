function epochTimeToNormal(timeInSec){
    const date = new Date(timeInSec);
    console.log(date)
    const year = date.getFullYear()
    console.log(year)
    let month = date.getMonth()+1
    console.log(month)
    let day = date.getDate()
    console.log(day)
    if((month+'').length<2)
    {
        month=''+0+month
    }
    
    if((day+'').length<2)
    {
        day=''+0+day
    }
    if (year==1969)
    {
        return `00:00:00`
    }
    return `${year}:${month}:${day}`
}
console.log(epochTimeToNormal(1));


// calc num of days between two dates

function calc(d1, d2){
    let date1 = new Date(d1);
    let date2 = new Date(d2);
    return (date2-date1)/86400000;
}

console.log(calc('2024-01-01','2024-02-18'));
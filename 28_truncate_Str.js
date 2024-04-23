// truncate a string till given no of length and add "..." in the end

function truncate(str, n){
    if(n > str.length || n === 0) return str; 
    str = str.slice(0, n+1)+"...";
    return str;
}

console.log(truncate("Roses are red, violets are blue" , 10));
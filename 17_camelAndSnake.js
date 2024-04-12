// CAMEL AND SNAKE CASE 

//CAMEL CASE
function toCamelCase(str){
    str = str.trim().split(" ");
    str = str.map((curr, index) => {
        if(index === 0) return curr;
        return curr.charAt(0).toUpperCase() + curr.slice(1).toLowerCase()
    })
    str = str.join("")
    return str
}

// SNAKE CASE
function toSnakeCase(str) {
    str = str.toLowerCase();
    str = str.trim().split(" ");
    str = str.join("_");
    return str;
}

console.log(toCamelCase("hello world for now"));
console.log(toSnakeCase("Hello world For NOw"));
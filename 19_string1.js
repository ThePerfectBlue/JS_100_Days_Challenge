// check whether string strts with a specific substribng

function check(str, start){
    // METHOD 1
    //return str.startsWith(start);

    //METHOD 2
    return str.slice(0, start.length) === start;
}

console.log(check("harry is a good boy", "Har"));
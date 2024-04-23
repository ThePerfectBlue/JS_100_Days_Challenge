// find fibonacci sing recursion

function fibo(n){
    if(n <= 1){
        return n;
    }
    return fibo(n - 1) + fibo(n - 2); 
}

for(let i = 0; i <= 5; i++){
    console.log(fibo(i));
}

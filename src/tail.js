'use strict';

const f = (n, sum=1) => {
    if(n <= 1){
        return sum;
    }
    return f(n-1, sum+n);
}

const result = f(100000);

console.log(result);
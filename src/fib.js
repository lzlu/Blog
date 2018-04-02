const fib = (n, num1 = 1, num2 = 1) => {
    if(n <= 0){
        return 0;
    }else if (n === 1){
        return num1;
    }
    return fib(n - 1, num2, num1 + num2);
};


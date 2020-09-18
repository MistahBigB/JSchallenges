const factorial = (n) => {
    let calc = 1;
    for (n; n > 1; n--) {
        calc = calc * n;
        // n--;
    }
 return(calc);
}
factorial(5)

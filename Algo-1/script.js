function sumOddNumbers() {
    let sum = 0;

    
    for (let i = 10; i <= 100; i++) {
        
        if (i % 2 !== 1) {
            sum += i;  
        }
    }

    
    return sum;
}


console.log(sumOddNumbers());  

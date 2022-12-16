function isPrime(n){
    for (let i = 2; i <=Math.sqrt(n); i++) {
        if(n%i==0){
            return false;
        }
    }
    return n>1;
}
console.log(isPrime(7)) //output: true;
console.log(isPrime(10)) //output: false;
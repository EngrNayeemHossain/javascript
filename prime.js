var n=10;
function isPrime(n){
    for(i=2;i,i<n;i++){
        if(n%i==0){
            return "Prime not";
         
        }
        
    }
    return 'Prime number';
}
var result=isPrime(17);
console.log(result);

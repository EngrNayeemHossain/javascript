var fibo=[0,1];
for(var i=2;i<=10;i++){
    fibo[i]=fibo[i-1]+fibo[i-2];
    //console.log(fibo[i],fibo[i-1],fibo[i-2]);
}
console.log(fibo);

//by using function

function fiboSeries(n){
    var fb = [0,1];
    for(var i=2;i<=n;i++){
        fb[i]=fb[i-1]+fb[i-2];
    }
    return fb;
}
var result=fiboSeries(13);
console.log(result);

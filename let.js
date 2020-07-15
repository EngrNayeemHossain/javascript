var name="nayeem";
console.log(name.length);
var school="Pabna Zilla School";
console.log(school);
console.log(school.length);
//how to use let and const and let for changeable values and const is for unchangeable values
const country = 'Bangladesh';
console.log(country);
let age=15;
age=16;
age=17;
console.log(age);
//lets talk about leap year and its uses
const year=3998;
let remainder = year%4;
if(remainder == 0){
    console.log('Its leap year');
}
else{
    console.log("Its not a leap year");
}
//lets talk about the use of for loop
//how to get the value of factorial
var factorial=1;
for(var i=1;i<=5;i++){
    factorial=factorial*i;
    console.log(i,factorial);
}
//how to get the value of factorial by function
function factor(num){
    var factor=1;
    for(var i=1;i<=num;i++){
    factor=factor*i;
    }
    return factor;
}
var res=factor(10);
console.log(res);

//how to use while loop

var i=0;
while(i<10){
    console.log(i);
    i++;
}

//how to find out the value of a fatorial by while loop

var a=1;
var fac=1;
while(a<=10){
    fac=fac*a;
    console.log(a,fac);
    a++;
}



  



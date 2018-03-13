do{
n=prompt("Enter the number:");
isPrime=true;
for(i=2;i<(n/2);i++){
if(n%i==0){
alert ("NUmber is not prime");
isPrime=false;
break;
}
}
if(isPrime)
{
alert("number is prime");
}
}
while(confirm("Do you want to continue?"));
document.write("Message from Javascript</br>");
n=prompt("Enter the number:");
isPrime=true;
for(i=2;i<=n/2;i++){
if(n%i==0){
    alert("number is not prime");
  isPrime=flase;
break;
}
}
if(isPrime){
alert("NUMber is prime");
}

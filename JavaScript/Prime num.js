
	document.write("Message from JavaScript<br/>");
	do{
	n=promp("Enter a number");
	isPrime=true;
	for(i=2;i<n/2;i++){
		if(n%i==0){
			alert("Number is not prime..");
			isPrime=false;
			break;
		}
	}	
if(isPrime){
			alert("Number is prime..");
}	
}
while(confirm("Do you want to continue"));
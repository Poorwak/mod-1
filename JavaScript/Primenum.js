
	document.write("Message from JavaScript<br/>");
	do{
	n=prompt("Enter a number");
	if(checkprime(n)){           //function called
		alert ("Number is Prime");
	}else{
		alert ("Number is not Prime");
	}
	} 
	while(confirm("Do you want to continue"));	
	

/********************Function Definition*******************/
function checkprime(n){
	for(i=2;i<=(n/2);i++){
		if(n%i==0){
		return false;
		}
	}
return true;
}	
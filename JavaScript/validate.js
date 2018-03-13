function validate(){
	if(validateDoB() && validateState()){
	var win=window.open();
	var dobStr = frm1.dob.value;
	var uname=frm1.txtUname.value;
	var state=frm1.state.value;
	var city= frm1.city.value;
	win.document.write("<br/>Name:"+uname);
	win.document.write("<br/>Date of Birth:"+dobStr);
	win.document.write("<br/>State:"+state);
	win.document.write("<br/>City:"+city);
		return true;
	}else{
		return false;
	}
}

function validateDOB(){
var today = new Date();
var dobStr = frm1.dob.value;
var dob = new Date(dobStr);
//console.log(dob +dobStr);
if(dob>=today){
	alert("Date of birth should not be today or later");
	return false;
	}else{
	return true;
	}
}
function validateState(){
var state = frm1.state.value;
if(state=="None"){
	alert("Select the State");
	frm1.state.focus();
	return false;
	}else{
	return true;
	}
}

var cityArr=[["Mumbai","Pune"],["Bangalore","Gulbarga"],["Agra","Lucknow"]];

function populateCity(){
var state = frm1.state.value;
var stateIdx=frm1.state.selectedIndex;

alert(state+"-"+stateIdx);
var city = frm1.city;
for(i=0;i<cityArr[stateIdx-1].length;i++){

var cityOption = new Option();
cityOption.text = cityArr[stateIdx-1][i];
city.options[i+1]=cityOption;
}
}
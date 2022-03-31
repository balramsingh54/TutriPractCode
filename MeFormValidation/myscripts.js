	function validation(){
		var firstname= document.getElementById('firstname').value;
		var lastname= document.getElementById('lastname').value;
		var email= document.getElementById('email').value;
		var mobile= document.getElementById('mobile').value;
		var password= document.getElementById('password').value;
		var confirmpassword= document.getElementById('confirmpassword').value;
		console.log(signupform.value);
	}
	function validate(e, pattern) {
		const currentFieldPlaceholder = e.attributes.placeholder.value;
    	if (e.value== "" || e.value== null) {
        	e.nextElementSibling.innerText= `${currentFieldPlaceholder} cant be blank`;
        	e.focus();
        	return false;
    	}
    	if (!pattern.test(e.value)) {
    		e.nextElementSibling.innerText= "First Name can't have Digit";
        	return true;
    	}
    	else{
        	e.nextElementSibling.innerText= "";
    	}
	}

	function validateL(e, pattern) {
		const currentFieldPlaceholder = e.attributes.placeholder.value;
    	if (e.value== "" || e.value== null) {
        	e.nextElementSibling.innerText= `${currentFieldPlaceholder} cant be blank`;
        	e.focus();
        	return false;
    	}
    	if (!pattern.test(e.value)) {
    		e.nextElementSibling.innerText= "Last Name can't have Digit";
        	return true;
    	}
    	else{
        	e.nextElementSibling.innerText= "";
    	}
	}

	function Validatemail(e, pattern) {
		const currentFieldPlaceholder = e.attributes.placeholder.value;
    	if (e.value== "" || e.value== null) {
        	e.nextElementSibling.innerText= `${currentFieldPlaceholder} cant be blank`;
        	e.focus();
        	return false;
    	}
    	if (!pattern.test(e.value)) {
    		e.nextElementSibling.innerText= "Email is not valid";
        	return true;
    	}
    	else{
        	e.nextElementSibling.innerText= "";
    	}
	}

	function Validatemobile(e, pattern) {
		const currentFieldPlaceholder = e.attributes.placeholder.value;
    	if (e.value== "" || e.value== null) {
        	e.nextElementSibling.innerText= `${currentFieldPlaceholder} cant be blank`;
        	e.focus();
        	return false;
    	}
    	if (!pattern.test(e.value)) {
    		e.nextElementSibling.innerText= "Number is not valid";
        	return true;
    	}
    	else{
        	e.nextElementSibling.innerText= "";
    	}
	}
	var passdata;
	function ValidatePassword(e, pattern) {
		const currentFieldPlaceholder = e.attributes.placeholder.value;
		passdata=e.value;
    	if (e.value.length < 6) {
        	e.nextElementSibling.innerText= `${currentFieldPlaceholder} should be minimum 6 character`;
        	e.focus();
        	return false;
    	}
    	else{
        	e.nextElementSibling.innerText= "";
    	}
	}

	function ValidatConfirmPassword(e) {
		const currentFieldPlaceholder = e.attributes.placeholder.value;
    	if (e.value== "" || e.value== null) {
        	e.nextElementSibling.innerText= `${currentFieldPlaceholder} can't be blank`;
        	e.focus();
        	return false;
    	}
    	if ((e.value===document.getElementById('password').value)) {
    		e.nextElementSibling.innerText= "";
        	return true;
    	}
    	else{
        	e.nextElementSibling.innerText= "Password doesn't match";
    	}
	}


	// var firstnamecheck= /[a-zA-Z]*/ig;
	// var lastnamecheck= /[A-Za-z. ]{1,30}/ig;
	// var emailcheck=  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	// var mobilecheck= /[0-9]{10}/;                  // /^[6-9]\d{9}$/gi;
	// var passwordcheck= /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
	// var confirmpasswordcheck= /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;




	// function fname() {
	// 	if(firstnamecheck.test(firstname)){
	// 	document.getElementById('error_firstname').innerHTML="";
	// 	}else{
	// 	document.getElementById('error_firstname').innerHTML="First Name can't have Digit";
	// 	} return false;
	// }

	// function lname() {
	// 	if(lastnamecheck.test(lastname)){
	// 	console.log("this is lastname");
	// 	document.getElementById('error_lastname').innerHTML="";
	// 	}else{
	// 	document.getElementById('error_lastname').innerHTML="Last Name can't have Digit";
	// 	} return false;
	// }

	// function femail() {
	// 	if(emailcheck.test(email)){
	// 	document.getElementById('error_email').innerHTML="";
	// 	}else{
	// 	document.getElementById('error_email').innerHTML="Email is invalid";
	// 	} return false;
	// }

	// function fmobile() {
	// 	if(mobilecheck.test(mobile)){
	// 	document.getElementById('error_mobile').innerHTML="";
	// 	}else{
	// 	document.getElementById('error_mobile').innerHTML="number is invalid";
	// 	}
	// 	console.log(mobile);
	// 	 return false;

	// }

	// function fpassword() {
	// 	if(passwordcheck.test(password)){
	// 	document.getElementById('error_password').innerHTML="";
	// 	}else{
	// 	document.getElementById('error_password').innerHTML="Password shoud be minimum 6 character";
	// 	} return false;		
	// }

	// function fcpassword(){
	// 	if(confirmpasswordcheck.test(confirmpassword)){
	// 	document.getElementById('error_confirpassword').innerHTML="";
	// 	}else{
	// 	document.getElementById('error_confirpassword').innerHTML="Password does't match";
	// 	} return false;
	// }

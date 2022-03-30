const namecheck = /^[a-z\s]*$/i;
const emailcheck = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const mobilecheck = /^[\+]?[0-9]{10,20}$/im;
const passwordcheck = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
const formWrapper = document.getElementById('form1');


function filedValidation(field, regex, message) {
	const currentField = field.nextElementSibling;
	if (regex.test(field.value)) {
		currentField.innerText = '';
		return true;
	} else {
		currentField.innerText = message;
		return false
	}
	return false
}

function validation(e) {
	e.preventDefault();
	if (e.target.id == 'firstname') {
		filedValidation(e.target, namecheck, "First Name can't have Digit and should not be empty")
	}
	if (e.target.id == 'lastname') {
		filedValidation(e.target, namecheck, "Last Name can't have Digit and should not be empty")
	}
	if (e.target.id == 'email') {
		filedValidation(e.target, emailcheck, "Email should not be empty and Email should be valid Email")
	}
	if (e.target.id == 'mobile') {
		filedValidation(e.target, mobilecheck, "Phone Number should not be empty and it should be Valid Number")
	}
	if (e.target.id == 'password') {
		filedValidation(e.target, passwordcheck, "Password should not be empty")
	}
	if (e.target.id == 'confirmpassword') {
		filedValidation(e.target, passwordcheck, "Confirm Password should not be empty")
	}
}

formWrapper.addEventListener('focus', validation.bind(this))
formWrapper.addEventListener('submit', function (e) {
	e.preventDefault();
	const formData = {
		firstname: '',
		lastname: '',
		email: '',
		phonenumber: '',
		password: '',
		confirmpassword: '',
	}
	if (filedValidation(formWrapper['firstname'], namecheck, 'First Name cant have digit')) {
		formData.firstname = formWrapper['firstname'].value
	}
	if (filedValidation(formWrapper['lastname'], namecheck, 'Last Name cant have')) {
		formData.lastname = formWrapper['lastname'].value
	}
	if (filedValidation(formWrapper['email'], emailcheck, 'email name should not be empty')) {
		formData.email = formWrapper['email'].value
	}
	if (filedValidation(formWrapper['mobile'], mobilecheck, 'Phone Number should not be empty')) {
		formData.phonenumber = formWrapper['mobile'].value
	}
	if (filedValidation(formWrapper['password'], passwordcheck, 'password should not be empty')) {
		formData.password = formWrapper['password'].value
	}
	if (filedValidation(formWrapper['confirmpassword'], passwordcheck, 'password should not be empty')) {
		if (formWrapper['password'].value === formWrapper['confirmpassword'].value) {
			formData.confirmpassword = formWrapper['confirmpassword'].value
		} else {
			formWrapper['confirmpassword'].nextElementSibling.innerText = 'Confirm Password should be same as Password'
		}
	}
	console.log(formData)
})

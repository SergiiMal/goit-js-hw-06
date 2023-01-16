const form = document.querySelector('.login-form');

form.addEventListener('submit', (handliSubmit) => {
	handliSubmit.preventDefault();
	const {
		elements: { email, password } } = handliSubmit.currentTarget;
	if (email.value === "" || password.value === "") {
		alert('Всі поля повинні бути заповнені!');
	} else {
		console.log('email: email.value, password: password.value');
		form.reset();
	}
});
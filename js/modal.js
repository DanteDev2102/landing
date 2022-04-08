const $home = document.getElementById('home');
const $modal = $home.childNodes[7];

$modal.style.display = 'none';

const validateInputs = (form) => {
	const $error = document.getElementById('error');
	const regexEmail =
		/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	let isCorrectEmail = false;
	let isAcceptPoliticies = false;
	let isAcceptCondition = false;

	for (let input of form) {
		switch (input.id) {
			case 'email':
				isCorrectEmail = regexEmail.test(input.value);
				break;
			case 'conditions':
				isAcceptCondition = input.checked;
				break;
			case 'politicies':
				isAcceptPoliticies = input.checked;
				break;
		}
	}

	if (isCorrectEmail && isAcceptPoliticies && isAcceptCondition) {
		$error.innerHTML = '';
		setTimeout(() => {
			$error.innerHTML = 'Submitted successfully';
			$modal.reset();
			setTimeout(() => ($modal.style.display = 'none'), 1000);
		}, 2500);
	} else {
		$error.innerHTML = 'fill in the fields correctly';
	}
};

$home.addEventListener('click', (e) => {
	if (e.target.matches('#show-modal'))
		$modal.style.display = 'flex';

	if (e.target.matches('#submit')) {
		e.preventDefault();
		validateInputs($modal);
	}

	if (e.target.matches('#cerrar')) {
		e.preventDefault();
		$modal.style.display = 'none';
	}
});

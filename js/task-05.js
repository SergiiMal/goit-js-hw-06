const links = {
	input: document.querySelector('#name-input'),
	output: document.querySelector('#name-output')
	
}
links.input.addEventListener('input', onInput);

function onInput(event) {
	links.output.textContent = event.currentTarget.value || 'Anonymous'
}


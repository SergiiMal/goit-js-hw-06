const inputControl = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text')
inputControl.oninput = function () {
	spanText.style.fontSize = inputControl.value + 'px';
};



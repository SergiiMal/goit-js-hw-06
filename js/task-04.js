const dec = document.querySelector('#counter button[data-action = decrement]')
const inc = document.querySelector('#counter button[data-action = increment]')
const span = document.querySelector('#value')

let counterValue = 0;

const decrem = () => {
	span.textContent = counterValue -= 1	
}
dec.addEventListener('click', decrem)


const increm = () => {
	span.textContent = counterValue += 1	
}
inc.addEventListener('click', increm)

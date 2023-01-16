function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btnColor = document.querySelector('.change-color');
const bodyColor = document.querySelector('body');
const spanText = document.querySelector('.color');

btnColor.addEventListener('click',()=>{  
  bodyColor.style.backgroundColor = 
  spanText.textContent = getRandomHexColor(); 
});
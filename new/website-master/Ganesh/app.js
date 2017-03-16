const mybody = document.getElementById('mybody');
const buttons = document.getElementById('buttons');
const texts = document.getElementById('texts');


buttons.addEventListener('click', () => {
	mybody.style.backgroundColor = texts.value;
});

$('img').css('display', 'none').slideDown(1800);
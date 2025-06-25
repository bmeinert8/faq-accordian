const accordionBtn = document.querySelector('.js-accordion');

accordionBtn.addEventListener('click', () => {
  const img = accordionBtn.querySelector('img');
  const answerDisplay = document.querySelector('.js-answer-text');
  answerDisplay.classList.toggle('answer-text-active');
  if (img.src.includes('icon-minus.svg')) {
    img.src = './images/icon-plus.svg';
    img.alt = 'bright purple plus icon';
  } else {
    img.src = './images/icon-minus.svg';
    img.alt = 'dark purple minus icon';
  }
});

const accordionButtons = document.querySelectorAll('.accordion-button');

accordionButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const isExpanded = button.getAttribute('aria-expanded') === 'true';
    const newExpanded = !isExpanded;
    button.setAttribute('aria-expanded', newExpanded.toString());

    const answerId = button.getAttribute('aria-controls');
    const answer = document.getElementById(answerId);
    answer.classList.toggle('answer-text-active', newExpanded);
    answer.setAttribute('aria-hidden', (!newExpanded).toString());

    const img = button.querySelector('img');
    img.src = newExpanded
      ? './images/icon-minus.svg'
      : './images/icon-plus.svg';
  });
});

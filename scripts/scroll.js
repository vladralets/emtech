const logo = document.querySelector('.header__logo');

logo.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
});

// Accordion

const titles = document.querySelectorAll('.career__title');
const descriptions = document.querySelectorAll('.career__description');

titles.forEach((title, index) => {
  title.addEventListener('click', () => {
    // Скрыть текущий открытый элемент гармошки
    const currentDescription = document.querySelector('.career__description.show');
    if (currentDescription && currentDescription !== descriptions[index]) {
      currentDescription.classList.remove('show');
    }
    // Показать выбранный элемент гармошки
    descriptions[index].classList.toggle('show');
  });
});
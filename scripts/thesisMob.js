const items = document.querySelectorAll('.thesis-mob__item');

items.forEach(item => {
  const header = item.querySelector('.thesis-mob__header');
  header.addEventListener('click', () => {
    items.forEach(otherItem => {
      if (otherItem !== item && otherItem.classList.contains('active')) {
        otherItem.classList.remove('active');
      }
    });
    item.classList.toggle('active');
  });
});
const thesisItems = document.querySelectorAll('.thesis__item');

console.log(thesisItems);


thesisItems.forEach(item => {  
  item.addEventListener('mouseover', () => {
    item.classList.toggle('active');
  });
  item.addEventListener('mouseout', () => {
    item.classList.toggle('active');
  });
});
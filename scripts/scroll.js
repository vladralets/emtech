const logo = document.querySelector('.header__logo');

logo.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
});

// scroll header

const header = document.querySelector('.header-scroll');

window.onscroll = function() {
  if (window.pageYOffset >= 200) {
    header.classList.add('active'); // показываем хедер, если страница прокручена на 200px или более
  } else {
    header.classList.remove('active'); // скрываем хедер, если страница прокручена менее, чем на 200px
  }
}

const navLinks = header.querySelectorAll('a');
const sections = document.querySelectorAll('section');

function setActiveLink() {
  const currentScrollPos = window.pageYOffset;
  sections.forEach(section => {
    if (section.offsetTop - header.offsetHeight <= currentScrollPos && section.offsetTop + section.offsetHeight - header.offsetHeight > currentScrollPos) {
      navLinks.forEach(link => {
        link.classList.remove('nav-active');
        if (section.getAttribute('id') === link.getAttribute('href').substring(1)) {
          link.classList.add('nav-active'); // добавляем класс "active" к ссылке, связанной с текущим блоком
        }
      });
    }
  });
}

window.addEventListener('scroll', setActiveLink);


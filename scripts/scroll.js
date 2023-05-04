const logo = document.querySelector('#logo-white');

logo.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
});

// scroll header

const header = document.querySelector('.header-scroll');

window.onscroll = function () {
  if (window.pageYOffset >= 200) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
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
          link.classList.add('nav-active');
        }
      });
    }
  });
}

window.addEventListener('scroll', setActiveLink);

const links = document.querySelectorAll('.nav__link');

links.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    const headerHeight = document.querySelector('.header-scroll').offsetHeight;
    const targetPosition = targetSection.offsetTop - headerHeight;
    console.log(targetSection.offsetTop, headerHeight, targetPosition);
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  });
});

const headerLinks = document.querySelectorAll('.nav-scroll__link');

headerLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    const headerHeight = document.querySelector('.header-scroll').offsetHeight;
    const targetPosition = targetSection.offsetTop - headerHeight;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  });
});
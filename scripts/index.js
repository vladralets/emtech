// Header Scroll 

const logo = document.querySelector('#logo-white');

logo.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
});

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
    console.log({targetPosition, headerHeight})
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
    console.log({targetPosition, headerHeight})
    window.scrollTo({
      top: targetPosition + 5,
      behavior: 'smooth'
    });
  });
});

//  Thesis section

const thesisItems = document.querySelectorAll('.thesis__item');

thesisItems.forEach(item => {  
  item.addEventListener('mouseover', () => {
    item.classList.toggle('active');
  });
  item.addEventListener('mouseout', () => {
    item.classList.toggle('active');
  });
});

// Mobile thesis section

const items = document.querySelectorAll('.thesis-mob__item-big');

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

// Team section

const carouselDiv = document.querySelector(".carousel");

for (let i = 1; i <= 42; i++) {
  const carouselItem = document.createElement("div");
  carouselItem.classList.add("carousel__item");

  const img = document.createElement("img");
  img.src = avatars[i % avatars.length].img;
  img.alt = avatars[i % avatars.length].name;
  img.classList.add("carousel__img");
  img.loading = "lazy";
  carouselItem.appendChild(img);

  const itemDesc = document.createElement("div");
  itemDesc.classList.add("carousel__item-desc");

  const name = document.createElement("p");
  name.classList.add("carousel__name");
  name.textContent = avatars[i % avatars.length].name;
  itemDesc.appendChild(name);

  const position = document.createElement("p");
  position.classList.add("carousel__position");
  position.textContent = avatars[i % avatars.length].position;
  itemDesc.appendChild(position);

  carouselItem.appendChild(itemDesc);

  carouselDiv.appendChild(carouselItem);
}

$(document).ready(function(){
  $('.carousel').slick({
    autoplay: true,
    autoplaySpeed: 1700,
    arrows: false,
    centerMode: true,
    focusOnSelect: true,
    pauseOnFocus: false,
    infinite: true,
    responsive: [

      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
        }
      }
    ],

    slidesToShow: 9,
    speed: 1000,
    variableWidth: true,

  });
});

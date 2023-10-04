const url = "https://emtech-web-strapi.devops-garden.cgistodulky.cz";

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

// News section

function createNewsStructure(data) {
  const newsContainer = document.createElement('div');
  newsContainer.classList.add('news__wrapper',  'container');

  data.forEach(item => {
    const newsItem = document.createElement('a');
    newsItem.href = item.attributes.link;
    newsItem.target = '_blank';
    newsItem.classList.add('news__item');

    const newsTitle = document.createElement('h3');
    newsTitle.classList.add('news__title');
    newsTitle.textContent = item.attributes.title;

    const newsDescription = document.createElement('p');
    newsDescription.classList.add('news__description');
    newsDescription.textContent = item.attributes.content;

    newsItem.appendChild(newsTitle);
    newsItem.appendChild(newsDescription);

    newsContainer.appendChild(newsItem);
});

return newsContainer;
}

function createNewsMobStructure(data) {
  const newsMobWrapper = document.createElement('div');
  newsMobWrapper.classList.add('news-mob__wrapper');

  data.forEach(item => {
    const newsItem = document.createElement('div');
    newsItem.classList.add('news-mob__item');

    const newsTitle = document.createElement('h3');
    newsTitle.classList.add('news-mob__title');
    newsTitle.textContent = item.attributes.title;

    const newsDescription = document.createElement('p');
    newsDescription.classList.add('news-mob__description');
    newsDescription.textContent = item.attributes.content;

    const newsLink = document.createElement('a');
    newsLink.classList.add('news-mob__button');
    newsLink.textContent = 'Chci vědět víc';
    newsLink.href = item.attributes.link;
    newsLink.target = '_blank';

    newsItem.appendChild(newsTitle);
    newsItem.appendChild(newsDescription);
    newsItem.appendChild(newsLink);

    // Append each news-mob__item to the news-mob__wrapper
    newsMobWrapper.appendChild(newsItem);
  });

  return newsMobWrapper;
}

const getNewsData = async () => {
  const response = await fetch(`${apiUrl}/api/news`);
  const data = await response.json();
  return data;
};

getNewsData().then((data) => {
  const newsData = data.data;
  console.log(newsData);
  const newsContainer = createNewsStructure(newsData);
  const mobNewsContainer = createNewsMobStructure(newsData);
  const news = document.querySelector('.news');
  const newsMob = document.querySelector('.news-mob');
  news.appendChild(newsContainer);
  newsMob.appendChild(mobNewsContainer);
}); 

[{id: 1, attributes: {title: 'title', content: 'description', link: '/sdf/'}}, {id: 2, attributes: {title: 'title', content: 'description', link: '/sdf/'}}]




// Team section

const getTeamData = async () => {
  const response = await fetch(`${url}/api/team-members?populate=*`);
  console.log("getTeamData", response);
  const data = await response.json();
  return data;
};

getTeamData().then((data) => {
  const carouselDiv = document.querySelector(".carousel");

  const members = data.data

for (let i = 1; i <= avatars.length; i++) {
  const carouselItem = document.createElement("div");
  carouselItem.classList.add("carousel__item");

  const img = document.createElement("img");
  img.src = `${url}${members[i % members.length].attributes.avatar.data[0].attributes.url}`;
  img.alt = members[i % members.length].attributes.name;
  img.classList.add("carousel__img");
  img.loading = "lazy";
  carouselItem.appendChild(img);

  const itemDesc = document.createElement("div");
  itemDesc.classList.add("carousel__item-desc");

  const name = document.createElement("p");
  name.classList.add("carousel__name");
  name.textContent = members[i % members.length].attributes.name;
  itemDesc.appendChild(name);

  const position = document.createElement("p");
  position.classList.add("carousel__position");
  position.textContent = members[i % members.length].attributes.position;
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
});


const getCareersData = async () => {
  const response = await fetch(`${url}/api/open-positions`);
  console.log('getCareersData: ', response);
  const data = await response.json();
  return data;
};

getCareersData().then((data) => {
  const careerContainer = document.querySelector(".career__container");
  
  function createDiv() {
    const div = document.createElement("div");
    div.classList.add("career__group");
    careerContainer.appendChild(div);
    return div;
  }

  let currentDiv = createDiv();

  data.data.forEach((position, index) => {
    if (index % 3 === 0 && index !== 0) {
      currentDiv = createDiv();
    }

    const career = document.createElement("a");
    career.classList.add("career__link");
    career.setAttribute("href", position.attributes.link);
    career.setAttribute("target", "_blank");
    career.innerText = position.attributes.positionName;

    currentDiv.appendChild(career);
  });
});



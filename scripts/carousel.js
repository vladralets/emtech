const avatars = [
  {
    name: "Lukáš",
    position: "Automatizačník a obláčkový vývojář",
    img: "./assets/new-avatars/Lukáš, automatizačník a obláčkový vývojář.png",
  },
  {
    name: "Filip",
    position: "Architekt a zástupce kapitána",
    img: "./assets/new-avatars/Filip, Architekt a zástupce kapitána.png",
  },
  {
    name: "Hanča",
    position: "vývojář",
    img: "./assets/new-avatars/Hanča, vývojář.png",
  },
  {
    name: "Tomík",
    position: "Tester",
    img: "./assets/new-avatars/Tomík, Tester.png",
  },
  {
    name: "Vlad",
    position: "Frontend vývojář",
    img: "./assets/new-avatars/Vlad, Frontend vývojář.png",
  },
  {
    name: "Pavel",
    position: "Architekt",
    img: "./assets/new-avatars/Pavel, Architekt.png",
  },
  {
    name: "Silvi",
    position: "UX",
    img: "./assets/new-avatars/Silvi, UX.png",
  },
  {
    name: "Honza",
    position: "Frontend vývojář",
    img: "./assets/new-avatars/Honza, Frontend vývojář.png",
  },
  {
    name: "Míra",
    position: "UX",
    img: "./assets/new-avatars/Míra, UX.png",
  },
  {
    name: "Jakub",
    position: "iOS",
    img: "./assets/new-avatars/Jakub, iOS.png",
  },
  {
    name: "Vlad",
    position: "Frontend vývojář",
    img: "./assets/new-avatars/Vladyslav, Frontend vývojář.png",
  },
];

const carouselDiv = document.querySelector(".carousel");

for (let i = 1; i <= 39; i++) {
  const carouselItem = document.createElement("div");
  carouselItem.classList.add("carousel__item");

  const img = document.createElement("img");
  img.src = avatars[i % avatars.length].img;
  img.alt = avatars[i % avatars.length].name;
  img.classList.add("carousel__img");
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

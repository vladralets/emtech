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
    position: "Vývojářka",
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
    position: "UX/UI dizajnérka",
    img: "./assets/new-avatars/Silvi, UX.png",
  },
  {
    name: "Honza",
    position: "Frontend vývojář",
    img: "./assets/new-avatars/Honza, Frontend vývojář.png",
  },
  {
    name: "Míra",
    position: "UX/UI dizajnér",
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
  {
    name: "Honza",
    position: "Frontend vývojář",
    img: "./assets/new-avatars/Honza, Vývojář počítačového vidění.png",
  },
  {
    name: "Krista",
    position: "Datová analytička",
    img: "./assets/new-avatars/Krista, Datová analytička.png",
  },
  {
    name: "Tom",
    position: "Tester",
    img: "./assets/new-avatars/Tom, Tester.png",
  },
  {
    name: "Roman",
    position: "Vývojář softwaru",
    img: "./assets/new-avatars/Roman, Vývojář softwaru.png",
  },
  {
    name: "Magdaléna",
    position: "Vývojářka",
    img: "./assets/new-avatars/Magdaléna, Vývojář.png",
  },
  {
    name: "Vašek",
    position: "Frontend vývojář",
    img: "./assets/new-avatars/Vašek, Frontend vývojář.png",
  },
  {
    name: "Martin",
    position: "Kapitán, vizionář",
    img: "./assets/new-avatars/Martin, Kapitán, vizionář.png",
  },
  {
    name: "Táňa",
    position: "RPA vývojářka",
    img: "./assets/new-avatars/Táňa, RPA vývojář.png",
  },
  {
    name: "Dan",
    position: "Backend vývojář",
    img: "./assets/new-avatars/Dan, Backend vývojář.png",
  },
  {
    name: "Martin",
    position: "Technický projekťák",
    img: "./assets/new-avatars/Martin, Technický projekťák.png",
  },
  {
    name: "Jirka",
    position: "AI/ML Jedi",
    img: "./assets/new-avatars/Jirka, AIML Jedi.png",
  },
  {
    name: "Mirka",
    position: "UX/UI dizajnérka",
    img: "./assets/new-avatars/Mirka, UXUI dizajnér.png",
  },
  {
    name: "Adam",
    position: "Flutter vývojář",
    img: "./assets/new-avatars/Adam, Flutter vývojář.png",
  },
  {
    name: "Přemek",
    position: "UX kapitán",
    img: "./assets/new-avatars/Přemek, UX kapitán.png",
  },
  {
    name: "Jana",
    position: "UX/UI dizajnérka",
    img: "./assets/new-avatars/Jana, UXUI dizajnér.png",
  },
  {
    name: "Jirka",
    position: "Vývojář",
    img: "./assets/new-avatars/Jirka, Vývojář.png",
  },
  {
    name: "Pavel",
    position: "Vývojář",
    img: "./assets/new-avatars/Pavel, Vývojář.png",
  },
  {
    name: "Zdeněk",
    position: "Architekt, zástupce kapitána",
    img: "./assets/new-avatars/Zdeněk, Architekt, zástupce kapitána.png",
  },
  {
    name: "Dominik",
    position: "Backend vývojář",
    img: "./assets/new-avatars/Dominik, Backend vývojář.png",
  },
  {
    name: "Lenka",
    position: "RPA vývojářka",
    img: "./assets/new-avatars/Lenka, RPA vývojář.png",
  },
  {
    name: "Jiří",
    position: "Vývojář softwaru",
    img: "./assets/new-avatars/Jiří, Vývojář softwaru.png",
  },
  {
    name: "David",
    position: "Vývojář",
    img: "./assets/new-avatars/David, vývojář.png",
  },
  {
    name: "Martin",
    position: "Roboťák",
    img: "./assets/new-avatars/Martin, Roboťák.png",
  },
  {
    name: "Natali",
    position: "UX/UI dizajnérka",
    img: "./assets/new-avatars/Natali, UXUI dizajnér.png",
  },
  {
    name: "Robert",
    position: "Architekt",
    img: "./assets/new-avatars/Robert, Architekt.png",
  },
  {
    name: "Martin",
    position: "Reacťák",
    img: "./assets/new-avatars/Martin, Reacťák.png",
  },
  {
    name: "Petr",
    position: "Androiďák",
    img: "./assets/new-avatars/Petr, Androiďák.png",
  },
  {
    name: "Ondra",
    position: "Backend vývojář",
    img: "./assets/new-avatars/Ondra, Backend vývojář.png",
  },
  {
    name: "Lukáš",
    position: "Android vývojář",
    img: "./assets/new-avatars/Lukáš, Android vývojář.png",
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

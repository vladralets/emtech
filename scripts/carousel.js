const carouselDiv = document.querySelector(".carousel");

for (let i = 1; i <= 39; i++) {
  const carouselItem = document.createElement("div");
  carouselItem.classList.add("carousel__item");

  const img = document.createElement("img");
  img.src = `./assets/avatars/avatar${i}.png`;
  img.alt = "avatar";
  img.classList.add("carousel__img");
  carouselItem.appendChild(img);

  const itemDesc = document.createElement("div");
  itemDesc.classList.add("carousel__item-desc");

  const name = document.createElement("p");
  name.classList.add("carousel__name");
  name.textContent = "Ім`я";
  itemDesc.appendChild(name);

  const position = document.createElement("p");
  position.classList.add("carousel__position");
  position.textContent = "Посада";
  itemDesc.appendChild(position);

  carouselItem.appendChild(itemDesc);

  carouselDiv.appendChild(carouselItem);
}

$(document).ready(function(){
  $('.carousel').slick({
    autoplay: true,
    autoplaySpeed: 1600,
    arrows: false,
    centerMode: true,
    focusOnSelect: false,
    slidesToShow: 9,
  });
});

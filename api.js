// https://dog.ceo/api/breeds/image/random
const imgLink = "https://dog.ceo/api/breeds/image/random";

fetch(imgLink)
  .then((response) => response.json())
  .then((data) => appendImg(data.message));

const img = document.querySelector(".img");
const main = document.querySelector(".main");

const appendImg = function (imgSrc) {
  img.src = imgSrc;
  return main.append(img);
};

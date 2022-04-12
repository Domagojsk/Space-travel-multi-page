'use strict';

const technologyImg = document.querySelector('.technology-img');
const name = document.querySelector('.technology-name');
const technologyInfo = document.querySelector('.technology-info');

const buttons = document.querySelectorAll('.technology-nav-item');

let buttonSelected = document.querySelector('.active-technology');

const technologyImages = {};

const getTechnologyImages = () => {
  if (window.innerWidth > 768) {
    return technologyImages.portrait;
  } else {
    return technologyImages.landscape;
  }
};

const getTechnologyData = (technologyName = null) => {
  fetch('data.json')
    .then((response) => response.json())
    .then((data) => {
      const technology = technologyName
        ? data.technology.find(
            (technology) => technology.name === technologyName
          )
        : data.technology[0];

      Object.assign(technologyImages, technology.images);
      technologyImg.src = getTechnologyImages();
      name.innerText = technology.name;
      technologyInfo.innerText = technology.description;
    });
};

getTechnologyData();

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    buttonSelected.classList.remove('active-technology');
    button.classList.add('active-technology');
    buttonSelected = document.querySelector('.active-technology');
    getTechnologyData(button.dataset.technology);
  });
});

window.addEventListener(
  'resize',
  () => {
    technologyImg.src = getTechnologyImages();
  },
  true
);

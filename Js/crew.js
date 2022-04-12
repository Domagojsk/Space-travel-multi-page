'use strict';

const crewImage = document.querySelector('.crew-member-img');
const memberName = document.querySelector('.member-name');
const memberTitle = document.querySelector('.member-title');
const memberInfo = document.querySelector('.member-info');

const dots = document.querySelectorAll('.crew-nav-item');

let dotSelected = document.querySelector('.active-crew-member');

const getCrewData = (crewName = null) => {
  fetch('data.json')
    .then((response) => response.json())
    .then((data) => {
      const crew = crewName
        ? data.crew.find((crew) => crew.name === crewName)
        : data.crew[0];

      crewImage.src = crew.images.png;
      memberName.innerText = crew.name;
      memberTitle.innerText = crew.role;
      memberInfo.innerText = crew.bio;
    });
};

getCrewData();

dots.forEach((dot) => {
  dot.addEventListener('click', () => {
    dotSelected.classList.remove('active-crew-member');
    dot.classList.add('active-crew-member');
    dotSelected = document.querySelector('.active-crew-member');
    getCrewData(dot.dataset.crew);
  });
});

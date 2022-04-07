'use strict';

const tabs = document.querySelectorAll('.destinations-nav-item');

const destinationImage = document.querySelector('.destination-image');

const name = document.getElementById('destinationName');

const destinationDescription = document.querySelector(
  '.destination-description'
);
const destinationDistance = document.querySelector('.destination-distance');

const destinationTravelTime = document.querySelector('.travel-time');

let destinationTabSelected = document.querySelector('.active-destination');

const localDestinationData = (destinationName = null) => {
  fetch('data.json')
    .then((response) => response.json())
    .then((data) => {
      const destination = destinationName
        ? data.destinations.find(
            (destination) => destination.name === destinationName
          )
        : data.destinations[0];

      destinationImage.src = destination.images.png;
      name.innerText = destination.name;
      destinationDescription.innerText = destination.description;
      destinationDistance.innerText = destination.distance;
      destinationTravelTime.innerText = destination.travel;
    });
};

localDestinationData();

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    destinationTabSelected.classList.remove('active-destination');
    tab.classList.add('active-destination');
    destinationTabSelected = document.querySelector('.active-destination');
    localDestinationData(tab.dataset.destination);
  });
});

const openBtn = document.querySelector('.dropbtn');
const closeBtn = document.querySelector('.close-button');
const contentBtn = document.querySelector('.dropdown-content');

openBtn.addEventListener('click', () => {
  contentBtn.style.width = '100%';
});
closeBtn.addEventListener('click', () => {
  contentBtn.style.width = '0';
});

const body = document.querySelector('body');
const navLinks = document.querySelectorAll('nav .onglet p a');
const moonSun = document.querySelector('#moon-sun');

let isSun = false;

moonSun.addEventListener('click', () => {
  body.classList.toggle('color-change');

  if (isSun) {
    moonSun.innerHTML = "<i class='bx bxs-moon'></i>";
    navLinks.forEach(nav => { nav.style.color = '#1E123A'; }); // Fixed color value
    isSun = false;
  } else {
    moonSun.innerHTML = "<i class='bx bxs-sun'></i>";
    navLinks.forEach(nav => { nav.style.color = '#fff'; });
    isSun = true;
  }
});

const searchBar = document.querySelector('#search');
const submitSearch = document.querySelector('#submit');

function filterAndDisplayBrand(brand) {
  hideAllBrands(); // Hide all brands
  showBrand(brand); // Show the specified brand
}

function filterSearch() {
  const searchText = searchBar.value.toLowerCase();

  if (searchText === 'cycling') {
    filterAndDisplayBrand(cycling);
  } else if (searchText === 'basket') {
    filterAndDisplayBrand(basketBall);
  } else if (searchText === 'rugby') {
    filterAndDisplayBrand(rugby);
  } else if (searchText === 'hokey') {
    filterAndDisplayBrand(iceHokey);
  } else if (searchText === 'athletisme') {
    filterAndDisplayBrand(athletisme);
  }
}

// searchBar.addEventListener('keyup', (evt) => {
//   if (evt.key === 'Enter') {
//     filterSearch();
//   }
// });

// submitSearch.addEventListener('click', () => {
//   filterSearch();
// });

// Event listener for 'keyup' on the search bar
searchBar.addEventListener('keyup', (evt) => {
  if (evt.key === 'Enter') {
    filterSearch(); // Call the search function on Enter key press
    localStorage.setItem('showElementsAfterReload', 'true'); // Set flag in localStorage
    location.reload(); // Reload the page to show updated search results
  }
});

// Event listener for the search submit button
submitSearch.addEventListener('click', () => {
  filterSearch(); // Call the search function on button click
  localStorage.setItem('showElementsAfterReload', 'true'); // Set flag in localStorage
  location.reload(); // Reload the page to show updated search results
});

window.addEventListener('DOMContentLoaded', function() {
  var showElements = localStorage.getItem('showElementsAfterReload');
  if (showElements === 'true') {
    filterSearch();
    localStorage.removeItem('showElementsAfterReload'); // Clean up the flag
  }
});



const allBrand = document.querySelector('.all');
const cyclingLetter = document.querySelector('.cycling-letter');
const basketBallLetter = document.querySelector('.basket-ball-letter');
const rugbyLetter = document.querySelector('.rugby-letter');
const iceHokeyLetter = document.querySelector('.ice-hokey-letter');
const athleLetter = document.querySelector('.athletisme-letter');

const cycling = document.querySelectorAll('[data-cycling]');
const basketBall = document.querySelectorAll('[data-basket-ball]');
const rugby = document.querySelectorAll('[data-rugby]');
const iceHokey = document.querySelectorAll('[data-ice-hokey]');
const athletisme = document.querySelectorAll('[data-athle]');

function hideAllBrands() {
  cycling.forEach(item => { item.style.display = 'none'; });
  basketBall.forEach(item => { item.style.display = 'none'; });
  rugby.forEach(item => { item.style.display = 'none'; });
  iceHokey.forEach(item => { item.style.display = 'none'; });
  athletisme.forEach(item => { item.style.display = 'none'; });
}

function showBrand(brand) {
  brand.forEach(item => { item.style.display = 'block'; });
}

allBrand.addEventListener('click', () => {
  showBrand(cycling);
  showBrand(basketBall);
  showBrand(rugby);
  showBrand(iceHokey);
  showBrand(athletisme);
});

cyclingLetter.addEventListener('click', () => {
  hideAllBrands();
  showBrand(cycling);
});

basketBallLetter.addEventListener('click', () => {
  hideAllBrands();
  showBrand(basketBall);
});

rugbyLetter.addEventListener('click', () => {
  hideAllBrands();
  showBrand(rugby);
});

iceHokeyLetter.addEventListener('click', () => {
  hideAllBrands();
  showBrand(iceHokey);
});

athleLetter.addEventListener('click', () => {
  hideAllBrands();
  showBrand(athletisme);
});

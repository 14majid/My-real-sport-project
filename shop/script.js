const body = document.querySelector('body');
const navOng = document.querySelectorAll('nav .onglet p a');
const moonSun = document.querySelector('#moon-sun');

let isSun = false;

moonSun.addEventListener('click', () => {
  body.classList.toggle('color-change');
  
  if (isSun) {
    moonSun.innerHTML = "<i class='bx bxs-moon'></i>";
    navOng.forEach(nav => { nav.style.color ='#1E123A'; }); // Fixed color value
    isSun = false;
  } else {
    moonSun.innerHTML = "<i class='bx bxs-sun'></i>";
    navOng.forEach(nav => { nav.style.color ='#fff'; });
    isSun = true;
  }
});



const searchBar = document.querySelector('#search')

function filterAndDisplayBrand(brand) {
  hideAllBrands(); // Hide all brands
  showBrand(brand); // Show the specified brand
}

function trye() {
  const searchText = searchBar.value

  if (searchText === 'cycling') {
    filterAndDisplayBrand(cycling)
  }
  if (searchText === 'basket') {
    filterAndDisplayBrand(basketBall)
  }
  if (searchText === 'rugby') {
    filterAndDisplayBrand(rugby)
  }
  if (searchText === 'hokey') {
    filterAndDisplayBrand(iceHokey)
  }
 
  if (searchText === 'athletisme') {
    filterAndDisplayBrand(athletisme)
  }
}

trye()

// searchBar.addEventListener('keyup', (evt) => {
//   const searchText = evt.target.value.toLowerCase()

//   if (searchText === 'cycling') {
//     filterAndDisplayBrand(cycling)
//   }
//   if (searchText === 'basket') {
//     filterAndDisplayBrand(basketBall)
//   }
//   if (searchText === 'rugby') {
//     filterAndDisplayBrand(rugby)
//   }
//   if (searchText === 'hokey') {
//     filterAndDisplayBrand(iceHokey)
//   }
 
//   if (searchText === 'athletisme') {
//     filterAndDisplayBrand(athletisme)
//   }
// })

const allBrand = document.querySelector('.all')
const cyclingLetter = document.querySelector('.cycling-letter')
const basketBallLetter = document.querySelector('.basket-ball-letter')
const rugbyLetter = document.querySelector('.rugby-letter')
const iceHokeyLetter = document.querySelector('.ice-hokey-letter')
const athleLetter = document.querySelector('.athletisme-letter')

const nationalTeam = document.querySelector('.men-natio-team')

const cycling = document.querySelectorAll('[data-cycling]')
const basketBall = document.querySelectorAll('[data-basket-ball]')
const rugby = document.querySelectorAll('[data-rugby]')
const iceHokey = document.querySelectorAll('[data-ice-hokey]')
const athletisme = document.querySelectorAll('[data-athle]')

const natiTeam = document.querySelector('.national-team-jersey')

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
  showBrand(cycling)
  showBrand(basketBall)
  showBrand(rugby) 
  showBrand(iceHokey)
  showBrand(athletisme)
  natiTeam.style.display = 'none'
})

nationalTeam.addEventListener('click', () => {
  hideAllBrands()
  natiTeam.style.display = 'block'
})

cyclingLetter.addEventListener('click', () => {
  hideAllBrands()
  showBrand(cycling);
})

basketBallLetter.addEventListener('click', () => {
  hideAllBrands()
  showBrand(basketBall)
})

rugbyLetter.addEventListener('click', () => {
  hideAllBrands()
  showBrand(rugby);
})

iceHokeyLetter.addEventListener('click', () => {
  hideAllBrands()
  showBrand(iceHokey);
})

athleLetter.addEventListener('click', () => {
  hideAllBrands()
  showBrand(athletisme);
})

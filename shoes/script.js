const body = document.querySelector('body');
const navOng = document.querySelectorAll('nav .onglet p a');
const sphere = document.querySelector('#sphere');

let isSun = false;

sphere.addEventListener('click', () => {
  body.classList.toggle('color-change');
  
  if (isSun) {
    sphere.innerHTML = "<i class='bx bxs-moon'></i>";
    navOng.forEach(nav => { nav.style.color ='#1E123A'; }); // Fixed color value
    isSun = false;
  } else {
    sphere.innerHTML = "<i class='bx bxs-sun'></i>";
    navOng.forEach(nav => { nav.style.color ='#fff'; });
    isSun = true;
  }
});



const searchBar = document.querySelector('#search')

function filterAndDisplayBrand(brand) {
  hideAllBrands(); // Hide all brands
  showBrand(brand); // Show the specified brand
}

searchBar.addEventListener('keyup', (e) => {
  const searchText = e.target.value.toLowerCase();
  if (searchText === 'nike') {
    filterAndDisplayBrand(nike)
  }
  if (searchText === 'adidas') {
    filterAndDisplayBrand(adidas)
  }
  if (searchText === 'newB') {
    filterAndDisplayBrand(newB)
  }
  if (searchText === 'underA') {
    filterAndDisplayBrand(underA)
  }
  if (searchText === 'puma') {
    filterAndDisplayBrand(puma)
  }
})

const allBrand = document.querySelector('.all')
const nikeLetter = document.querySelector('.nike-letter')
const adidasLetter = document.querySelector('.adidas-letter')
const underALetter = document.querySelector('.underA-letter')
const newBLetter = document.querySelector('.newB-letter')
const pumaLetter = document.querySelector('.puma-letter')

const nike = document.querySelectorAll('#content .nike')
const adidas = document.querySelectorAll('#content .adidas')
const underA = document.querySelectorAll('#content .underA')
const newB = document.querySelectorAll('#content .newB')
const puma = document.querySelectorAll('#content .puma')

function hideAllBrands() {
  nike.forEach(item => { item.style.display = 'none'; });
  adidas.forEach(item => { item.style.display = 'none'; });
  underA.forEach(item => { item.style.display = 'none'; });
  newB.forEach(item => { item.style.display = 'none'; });
  puma.forEach(item => { item.style.display = 'none'; });
}

function showBrand(brand) {
  brand.forEach(item => { item.style.display = 'block'; });
}

allBrand.addEventListener('click', () => {
  showBrand(nike)
  showBrand(adidas)
  showBrand(underA) 
  showBrand(newB)
  showBrand(puma)
})

nikeLetter.addEventListener('click', () => {
  hideAllBrands()
  showBrand(nike);
})

adidasLetter.addEventListener('click', () => {
  hideAllBrands()
  showBrand(adidas)
})

underALetter.addEventListener('click', () => {
  hideAllBrands()
  showBrand(underA);
})

newBLetter.addEventListener('click', () => {
  hideAllBrands()
  showBrand(newB);
})

pumaLetter.addEventListener('click', () => {
  hideAllBrands()
  showBrand(puma);
})

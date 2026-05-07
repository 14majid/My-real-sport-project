const body = document.querySelector('body');
const navOng = document.querySelectorAll('nav .onglet p a');
const sphere = document.querySelector('#sphere');

let isSun = false;
if (sphere) {
  sphere.addEventListener('click', () => {
    body.classList.toggle('color-change');
    if (isSun) {
      sphere.innerHTML = "<i class='bx bxs-moon'></i>";
      navOng.forEach(nav => { nav.style.color ='#1E123A'; });
      isSun = false;
    } else {
      sphere.innerHTML = "<i class='bx bxs-sun'></i>";
      navOng.forEach(nav => { nav.style.color ='#fff'; });
      isSun = true;
    }
  });
}

const navH1 = document.querySelector('nav h1');
if (navH1) {
  window.addEventListener('resize', () => {
    if (window.innerWidth < 682) {
      navH1.textContent = 'SS';
    } else {
      navH1.textContent = 'SportShop';
    }
  });
}

const openBtn = document.querySelector('.dropbtn');
const closeBtn = document.querySelector('.close-button');
const contentBtn = document.querySelector('.dropdown-content');

if (openBtn && contentBtn) {
  openBtn.addEventListener('click', () => {
    contentBtn.style.width = '100%';
  });
}
if (closeBtn && contentBtn) {
  closeBtn.addEventListener('click', () => {
    contentBtn.style.width = '0';
  });
}

const date = document.querySelector('#date')
if (date) {
  let dateType = new Date().getFullYear()
  date.innerHTML = dateType
}

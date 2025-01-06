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

const navH1= document.querySelector('nav h1');

window.addEventListener('resize', () => {
  if (window.innerWidth < 682) {
    navH1.textContent = 'SS';
  } else {
    navH1.textContent = 'SportShop';
  }
});


const openBtn = document.querySelector('.dropbtn');
const closeBtn = document.querySelector('.close-button');
const contentBtn = document.querySelector('.dropdown-content');

openBtn.addEventListener('click', () => {
  contentBtn.style.width = '100%';
});
closeBtn.addEventListener('click', () => {
  contentBtn.style.width = '0';
});


const buttonLeft = document.querySelector('.buttons #next');
const buttonRight = document.querySelector('.buttons #prev');
buttonLeft.addEventListener('click', () => {
  document.querySelector('.cards').scrollLeft -= 200;
});
buttonRight.addEventListener('click', () => {
  document.querySelector('.cards').scrollLeft += 200;
});


const shopButton = document.getElementById('shop-button');

shopButton.addEventListener('click', () => {
  document.querySelector('.container-shop').style.display = 'block';
});






const baseBallButton = document.querySelector(".baseball .baseball-content button");
const baseball = document.querySelector(".baseball");
const globalBase = document.querySelector(".global-base");

baseBallButton.addEventListener('click', () => {
  localStorage.setItem('showElementsAfterReload', 'true');

  location.reload();
})

window.addEventListener('DOMContentLoaded', function() {
  var showElements = localStorage.getItem('showElementsAfterReload');

  if (showElements === 'true') {
    document.querySelector("header").style.display = "none";
    document.querySelector("#shoes").style.display = "none";
    document.querySelector(".container-shop").style.display = "none";
    document.querySelector(".main-body").style.display = "none";
    document.querySelector(".video").style.display = "none";
    document.querySelector(".contact").style.display = "none";
    document.querySelector(".woman").style.display = "none";
    document.querySelector(".football").style.display = "none";
    contentContainer.style.display = "none";
    readMoreBtn.style.display = "none";
    readLessBtn.style.display = "none";

    globalBase.style.display = 'block'
    localStorage.removeItem('showElementsAfterReload');
  }
});



const readMoreBtn = document.querySelector('.read-more-btn');
const readLessBtn = document.querySelector('.read-less-btn');
const contentContainer = document.querySelector('.card-football');

readMoreBtn.addEventListener('click', function() {
  contentContainer.style.height = "100%"
});

readLessBtn.addEventListener('click', function() {
  contentContainer.style.height = "3000px"
});


const date = document.querySelector('#date')
let dateType = new Date().getFullYear()
date.innerHTML = dateType
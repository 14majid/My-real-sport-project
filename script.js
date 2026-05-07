

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


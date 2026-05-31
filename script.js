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



const scrollBtn = document.querySelector('.read-more-btn');
const contentContainer = document.querySelector('.card-football');

let expanded = false;

scrollBtn.addEventListener('click', function () {

  if (!expanded) {
    contentContainer.style.height =
    contentContainer.scrollHeight + 'px';

    scrollBtn.innerHTML = "<i class='bx bx-chevrons-up'></i>";
    expanded = true;

  } else {
    contentContainer.style.height = '3100px';

    scrollBtn.innerHTML = "<i class='bx bx-chevrons-down'></i>";
    expanded = false;
  }
});

console.log(contentContainer.scrollHeight);




let i = 1
const footballBaseContant = document.querySelector('.card-football .card-baseball-content')
const Heart =  document.querySelectorAll('.heart')
const pointCount = document.querySelector('.point-count')

// const Result = document.querySelector('result')


// Heart.addEventListener('click', ()=> {
//   pointCount.innerHTML = i++
// })

Heart.forEach((heart) => {
  heart.addEventListener('click', ()=> {
    pointCount.style.display = 'block'
    pointCount.innerHTML = i++


    // let allContent = '';

    // footballBaseContant.forEach((foot) => {
    //   allContent += foot.innerHTML;
    // });
    
    // localStorage.setItem('savedContent', footballBaseContant.innerHTML);

    // window.location.href = 'fav/favoris.html'
  })
})


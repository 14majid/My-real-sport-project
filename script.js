// const { jsx } = require("react/jsx-runtime");
const containerCards= document.querySelector(".cards")
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
fetch("./json/shopButton.json")
  .then((res) => res.json())
  .then((datas) => {
    let content = ""

    datas.map(data => {
      content += `
        <div class="card">
          <img src="${data.img}" alt="">
          <div>
            <p>${data.description}</p>
              <p>${data.price}</p>
          </div>
        </div>
      `
    })
    containerCards.innerHTML = content 
  })
.catch(error => console.error("error"))


const cardfetchbaseball = document.querySelector('.card-baseball')
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
    scrollBtn.style.display = "none";
    // readLessBtn.style.display = "none";

    globalBase.style.display = 'block'
    localStorage.removeItem('showElementsAfterReload');
  }
});

fetch("./json/baseball.json")
  .then(res => res.json())
  .then((datas) => {
    let c = ""

    datas.map(data => {
      c += `
        <div class="card-baseball-content">
          <img src="${data.img}"
            alt="San Diego Padres New Era Gold 2024 Spring Training Low Profile 59FIFTY Fitted Hat"
            data-caption="San Diego Padres New Era Gold 2024 Spring Training Low Profile 59FIFTY Fitted Hat">
          <div>
            <h4>${data.head}</h4>
            <p>${data.descript}</p>
          </div>
          <div>
            <button>Buy Now</button>
            <button class="heart"><i class="fa-regular fa-heart"></i></button>
          </div>
        </div>
      `
    })
    cardfetchbaseball.innerHTML = c
  })
  .catch(error => console.error("error"))



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

// console.log(contentContainer.scrollHeight);


let i = Number(localStorage.getItem('KeppCountAfterReload')) || 0;
const pointCount = document.querySelector('.point-count');

if (i > 0) {
  pointCount.style.display = 'block';
  pointCount.innerHTML = i;
}


document.addEventListener('click', (event) => {
  const heartbutton = event.target.closest(".heart")
  const closeCard = heartbutton.closest('.card-baseball-content')

    const product = {
      image : closeCard.querySelector('img').src,
      price : closeCard.querySelector('h4').textContent,
      description : closeCard.querySelector('p').textContent,
      delete : 'delete'
    }

    // On récupère la liste des favoris déjà enregistrée (si elle existe), sinon un tableau vide
    let favorites = JSON.parse(localStorage.getItem("favorite")) || []

    // On cherche si ce produit est déjà dans les favoris, en comparant l'image (unique à chaque produit)
    // findIndex renvoie la position du produit s'il le trouve, sinon -1
    const index = favorites.findIndex(fav => fav.image === product.image)

    // On récupère l'icône <i> à l'intérieur du bouton cœur, pour changer son apparence
    const icon = heartbutton.querySelector("i");

    if (index === -1) {
      // Le produit n'est pas encore en favori -> on l'ajoute
      favorites.push(product)

      // On rend le cœur plein pour montrer qu'il est maintenant en favori
      if (icon) {
        icon.classList.remove("fa-regular");
        icon.classList.add("fa-solid");
      }
    } else {
      // Le produit est déjà en favori -> on le retire de la liste
      favorites.splice(index, 1)

      // On rend le cœur vide pour montrer qu'il n'est plus en favori
      if (icon) {
        icon.classList.remove("fa-solid");
        icon.classList.add("fa-regular");
      }
    }



    // On réenregistre TOUTE la liste (et pas juste le dernier produit cliqué)
    localStorage.setItem("favorite", JSON.stringify(favorites))

    // Le badge (point-count) affiche le nombre d'articles ACTUELLEMENT en favoris
    // -> il remonte quand on ajoute, redescend quand on retire, et revient à 0 si la liste est vide
    i = favorites.length
    pointCount.innerHTML = i
    pointCount.style.display = i > 0 ? 'block' : 'none'
    localStorage.setItem('KeppCountAfterReload', i)
    
    // window.location.href = 'heart/heart.html'
})
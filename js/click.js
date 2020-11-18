let linkBtn = document.getElementsByClassName('categories__link');
let arrows = document.getElementsByClassName('categories__arrow');
let text = document.getElementsByClassName('categories__text');
let checkBtn = document.getElementsByClassName('categories__checkout');
let linksArray = Array.from(linkBtn);
let arrowsArray = Array.from(arrows);
let textArray = Array.from(text);
let checkBtnArray = Array.from(checkBtn);

for (let aydai = 0; aydai < 3; aydai++) {
  linksArray[aydai].addEventListener('click', function (atai) {
    atai.preventDefault();
    textArray[aydai].classList.toggle('is-active');
    textArray[aydai].style.display = 'none';
    function sultan() {
      textArray[aydai].style.display = 'block';
    }
    function eraly() {
      checkBtnArray[aydai].classList.toggle('is-active');
    }
    linksArray[aydai].classList.toggle('is-active');
    linksArray[aydai].classList.toggle('is-backward');
    arrowsArray[aydai].classList.toggle('is-active');
    arrowsArray[aydai].classList.toggle('is-backward');
    setTimeout(sultan, 2000)
    eraly()
  });
}

function sortSection(){
  const sortItems = document.getElementsByClassName('filter__items')
  let sortArray = Array.from(sortItems);
  sortArray.forEach((item) => {
    item.addEventListener('click', () => {
      sortArray.forEach((i) => {
        i.classList.remove('filter__items--active');
      });
      item.classList.add('filter__items--active');
    })
  });
}
sortSection();

function cart() {
  const addButtons = document.querySelectorAll('.sort__add');
  const cartCounter = document.querySelector('.cart__counter');
  let counter = 0;
  addButtons.forEach((button) => {
    button.addEventListener('click', function () {
      counter += 1;
      cartCounter.innerHTML = `${counter}`;
    });
  });
}
cart();

function checkmarkRemover() {
  const toggle = document.querySelectorAll('.sort__add');
  toggle.forEach((item) => {
    item.classList.remove('sort__add--active');
    const circles = document.querySelectorAll('.circle-loader');
    circles.forEach((circ) => {
      circ.classList.remove('load-complete');
    });
    const checkMarks = document.querySelectorAll('.checkmark');
    checkMarks.forEach((check) => {
      check.classList.remove('checkmark--active');
    });
  });
}

function checkmark() {
  const toggle = document.querySelectorAll('.sort__add');
  const circles = document.querySelectorAll('.circle-loader');
  const checkMarks = document.querySelectorAll('.checkmark');
  toggle.forEach((item, index) => {
    item.addEventListener('click', function (samaKnopka) {
      samaKnopka.target.classList.add('sort__add--active');
      circles[index].classList.add('load-complete');
      checkMarks[index].classList.add('checkmark--active');
      setTimeout(checkmarkRemover, 1000);
    });
  });
}
checkmark();
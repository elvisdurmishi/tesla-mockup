let buttonNgjyra = document.querySelectorAll('.btn-color');
let buttonCilesit = document.querySelectorAll('.btn-quality');
let carImage = document.querySelector('.car-image');
let red = document.querySelector('.red');
let blue = document.querySelector('.blue');
let grey = document.querySelector('.grey');

red.addEventListener('click', () => {
  carImage.src = '../images/Tesla Car Red.png';
});

blue.addEventListener('click', () => {
  carImage.src = '../images/Tesla Car Blue.png';
});

grey.addEventListener('click', () => {
  carImage.src = '../images/Tesla Car Grey.png';
});

buttonNgjyra.forEach((link) => link.addEventListener('click', ngjyraActive));
buttonCilesit.forEach((link) => link.addEventListener('click', cilesiActive));

function ngjyraActive() {
  buttonNgjyra.forEach((link) => link.classList.remove('btn-color-active'));
  this.classList.add('btn-color-active');
  Image.src = 'TeslaCarBlue.png';
}

function cilesiActive() {
  buttonCilesit.forEach((link) => link.classList.remove('btn-quality-active'));
  this.classList.add('btn-quality-active');
}

function togglePopup() {
  document.getElementById('popup-1').classList.toggle('active');
}

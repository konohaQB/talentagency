new WOW().init();

window.addEventListener('load', function () {
  setTimeout(function () {
    var element = document.getElementById('top-Image');
    element.style.opacity = 1;
  }, 30);
  setTimeout(function () {
    var element_main = document.getElementById('main')
    element_main.style.backgroundColor = 'rgb(255, 235, 241)';
    // background-color: rgb(255, 235, 241);
  }, 500);
  setTimeout(function () {
    var element_header = document.getElementById('header');
    element_header.style.height = '200px';
  }, 1000);
  // setTimeout(function(){
  //     var element_contact_image_container = document.getElementsByClassName('image-container');
  //     element_contact_image_container[0].style.width = '30%';
  // }, 300);
});

var ham_elements = document.getElementsByClassName('hamburger');
var ham = ham_elements[0];
var nav = document.getElementById('nav-menu');
var applyBtns = document.getElementsByClassName('apply-button');
var applyBtn = applyBtns[0];
var mainboards = document.getElementsByClassName('mainboard-bg');
var mainboard = mainboards[0];

ham.addEventListener("click", function () {
  nav.style.display = 'flex';
  applyBtn.style.display = 'none';
  mainboard.style.margin = '0 auto 0'
})

var closebtn = document.getElementById('cross-btn');
closebtn.addEventListener("click", function(){
  nav.style.display = 'none';
  applyBtn.style.display = 'flex';
  applyBtn.style.flexDirection = 'column';
  mainboard.style.margin = '-150rem auto 0';
})
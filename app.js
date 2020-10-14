// selector

const header = document.querySelector('.header');
const menuBtn = document.querySelector('.hamburger_btn');

menuBtn.addEventListener('click',function(){
header.classList.toggle('menu_open'); 

});


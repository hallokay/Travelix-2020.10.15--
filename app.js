// selector

const header = document.querySelector('.header');
const menuBtn = document.querySelector('.hamburger_btn');

window.addEventListener('scroll',function(){
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('active',windowPosition)
})

menuBtn.addEventListener('click',function(){
header.classList.toggle('menu_open'); 

});


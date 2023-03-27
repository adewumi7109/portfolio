var burger = document.getElementById('burger');
var navlink = document.getElementById('navLink');

burger.addEventListener('click', ()=>{
   navlink.classList.toggle('active')
   burger.classList.toggle('change')
})
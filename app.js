

ScrollReveal().reveal('section', {
    delay: 375,
    duration: 1000,
    reset: true
});


var slideUp = {
   distance: '50%',
   origin: 'left',
   duration: 1000,
   opacity: null
};

ScrollReveal().reveal('.container',  slideUp);
ScrollReveal().reveal('p',  slideUp);



var burger = document.getElementById('burger');
var navlink = document.getElementById('navLink');

burger.addEventListener('click', ()=>{
   navlink.classList.toggle('active')
   burger.classList.toggle('change')
})

// Skill Progress Bar

var spans = document.querySelectorAll('.progress-bar span')
spans.forEach(span =>{
   span.style.width = span.dataset.width
   span.innerHTML = span.dataset.width
})


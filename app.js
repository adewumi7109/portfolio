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


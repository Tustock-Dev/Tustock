const bar = document.querySelector('.bars');
const nav = document.querySelector('.ul-screen');
const navLinks = document.querySelectorAll('nav li')
const activepage = window.location.pathname;

bar.addEventListener('click', function(){
   bar.classList.toggle('active');
   nav.classList.toggle('active');
})


navLinks.forEach(li => {
   li.addEventListener('click', () => {
      li.classList.add('li')
   })
});
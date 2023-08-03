const bar = document.querySelector('.bars');
const nav = document.querySelector('.ul-screen');

bar.addEventListener('click', function(){
   bar.classList.toggle('active');
   nav.classList.toggle('active');
})
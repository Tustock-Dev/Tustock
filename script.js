const bar = document.querySelector('.bars');
const nav = document.querySelector('.ul-screen');
const navLinks = document.querySelectorAll('nav ul a');
const activepage = window.location.pathname;

bar.addEventListener('click', function(){
   bar.classList.toggle('active');
   nav.classList.toggle('active');
})

navLinks.forEach(links => {
   const navlinksPath = new URL(links.href).pathname;

   if(activepage === navlinksPath) {
      links.classList.add('current'); 
   }
});
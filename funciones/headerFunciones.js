const header = document.getElementById('header');
const link1 = document.getElementById('link1');
const link2 = document.getElementById('link2');
const link3 = document.getElementById('link3');
const link4 = document.getElementById('link4');

window.addEventListener('scroll', () => {

    if (window.scrollY > 50) { 
      header.classList.add('scrolled');

  } else {
      header.classList.remove('scrolled');
  }
});

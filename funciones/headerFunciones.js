const header = document.getElementById('header');
const link1 = document.getElementById('link1');
const link2 = document.getElementById('link2');
const link3 = document.getElementById('link3');
const link4 = document.getElementById('link4');

window.addEventListener('scroll', () => {

    if (window.scrollY > 50) { 
      header.classList.add('scrolled');
      link1.style.color = 'white'
      link2.style.color = 'white'
      link3.style.color = 'white'
      link4.style.color = 'white'

  } else {
      header.classList.remove('scrolled');
      link1.style.color = 'black'
      link2.style.color = 'black'
      link3.style.color = 'black'
      link4.style.color = 'black'

  }
});

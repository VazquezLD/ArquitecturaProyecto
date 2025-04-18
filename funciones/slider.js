const dots1 = document.querySelectorAll('.dot1')
const dots2 = document.querySelectorAll('.dot2')
const dots3 = document.querySelectorAll('.dot3')

const slider1 = document.getElementById('setImagenes1')
const slider2 = document.getElementById('setImagenes2')
const slider3 = document.getElementById('setImagenes3')

const imagenes = ['../assets/casaHeroo.jpg', '../assets/casaHero2.jpg', '../assets/casaHero3.jpg']

dots1.forEach(dot =>{
    dot.addEventListener('click', () =>{
        dots1.forEach(dot => dot.classList.add('activo'));
        dot.classList.remove('activo')
        const indice = dot.dataset.index;
        slider1.src = imagenes[indice];
    })

})

dots2.forEach(dot =>{
    dot.addEventListener('click', () =>{
        dots2.forEach(dot => dot.classList.add('activo'));
        dot.classList.remove('activo')
        const indice = dot.dataset.index;
        slider2.src = imagenes[indice];
    })

})

dots3.forEach(dot =>{
    dot.addEventListener('click', () =>{
        dots3.forEach(dot => dot.classList.add('activo'));
        dot.classList.remove('activo')
        const indice = dot.dataset.index;
        slider3.src = imagenes[indice];
    })

})
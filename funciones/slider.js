const imagenes = ['../assets/casaHeroo.jpg', '../assets/casaHero2.jpg', '../assets/casaHero3.jpg'];

function configurarSlider(dotsSelector, sliderId) {
    const dots = document.querySelectorAll(dotsSelector);
    const slider = document.getElementById(sliderId);

    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            dots.forEach(d => d.classList.add('activo'));
            dot.classList.remove('activo')
            
            const indice = dot.dataset.index
            slider.src = imagenes[indice]
        });
    })
}
configurarSlider('.dot1', 'setImagenes1')
configurarSlider('.dot2', 'setImagenes2')
configurarSlider('.dot3', 'setImagenes3')
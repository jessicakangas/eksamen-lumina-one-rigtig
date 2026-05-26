/*COLORSELECTOR - INTERAKTIVITET*/

/*Henter de fire farvebjælker og billedet af højtaleren */
const colorBars = document.querySelectorAll ('.color-bar');
const mainProductImg = document.querySelector ('#speakerImage');

/* Fortæller koden, at den skal tage farvebjælkerne én efter én og sætte en lyttepost på hver enkelt */
colorBars.forEach(bar => {
    bar.addEventListener('click', () => {

        /* Fjerner den mørke ramme (.active) fra alle de andre bjælker først */
        colorBars.forEach(b => b.classList.remove('active'));

        /* Giv den mørke ramme til den bjælke, man klikker på */
        bar.classList.add('active');

        /* Henter billedstien fra data-color på den klikkede bjælke */
        const newImgSrc = bar.getAttribute('data-color');
        
        /* Skifter det store (første) billede ud til den nye farve */
        if (newImgSrc) {
            mainProductImg.src = newImgSrc;
        }
    });
});

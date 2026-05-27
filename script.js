/*COLORSELECTOR - INTERAKTIVITET*/

/*Henter de fire farve containere og billedet af højtaleren */

const colorBars = document.querySelectorAll ('.color-bar');
const mainProductImg = document.querySelector ('#speakerImage');


colorBars.forEach(bar => {
    bar.addEventListener('click', () => {

        /* Fjerner den mørke ramme (.active) fra alle de andre containere */
        colorBars.forEach(b => b.classList.remove('active'));

        /* Mørk ramme ved klik på container*/
        bar.classList.add('active');

        /* Henter billedstien fra data-color-attributten ved klik */
        const newImgSrc = bar.getAttribute('data-color');
        
        /* Skifter det store (første) billede ud til nyt billede */
        if (newImgSrc) {
            mainProductImg.src = newImgSrc;
        }
    });
});


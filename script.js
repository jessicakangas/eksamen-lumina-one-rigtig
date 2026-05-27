
//FIND DIN PERSONLIGE FARVE SEKTION

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


//FIND DIN FARVE SEKTION (produktspecifikationer)

// Finder alle knapperne, der kan klikkes på
const specToggles = document.querySelectorAll('.spec-toggle');

specToggles.forEach(toggle => {
    toggle.addEventListener('click', function() {
       
        const currentItem = this.parentElement;
        const isActive = currentItem.classList.contains('active');
        
        // Lukker alle paneler først (så kun én er åben ad gangen)
        document.querySelectorAll('.spec-item').forEach(item => {
            item.classList.remove('active');
            item.querySelector('.spec-panel').style.maxHeight = null;
        });
        
        // Hvis den klikkede ikke var aktiv før, er den nu
        if (!isActive) {
            currentItem.classList.add('active');
    
            const panel = currentItem.querySelector('.spec-panel');
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
});

//Find din personlige farve sektion

/*Henter de fire farve containere og billedet af højtaleren */

const colorBars = document.querySelectorAll ('.color-bar');
const mainProductImg = document.querySelector ('#speakerImage');
const colorDescriptionText = document.querySelector('#colorDescription');


colorBars.forEach(bar => {
    bar.addEventListener('click', () => {
        colorBars.forEach(b => b.classList.remove('active')); 
        bar.classList.add('active'); 
        const newImgSrc = bar.getAttribute('data-color');
        if (newImgSrc) {
            mainProductImg.src = newImgSrc;
        }
        const newText = bar.getAttribute('data-text');
        if (newText && colorDescriptionText) {
            colorDescriptionText.textContent = newText;
        }
    });
});


//Produkt specifikationer

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
        
        if (!isActive) {
            currentItem.classList.add('active');
    
            const panel = currentItem.querySelector('.spec-panel');
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
});


// Scrolle effekt ---

const reviewBtn = document.getElementById('reviewScrollBtn');
const reviewContainer = document.querySelector('.reviews-cards'); 

if (reviewBtn && reviewContainer) {
    reviewBtn.addEventListener('click', () => {
        console.log("Der blev klikket på pilen!"); 
        
        reviewContainer.scrollBy({
            left: 344,
            behavior: 'smooth'
        });
    });
} else {
    console.log("Fejl: Kunne ikke finde reviewBtn eller reviewContainer i HTML'en!");
}



// --- FOOTER E-MAIL NYHEDSBREV FUNKTION ---

const newsletterForm = document.getElementById('newsletterForm');
const newsletterEmail = document.getElementById('newsletterEmail');
const newsletterSuccess = document.getElementById('newsletterSuccess');

if (newsletterForm && newsletterEmail && newsletterSuccess) {
    newsletterForm.addEventListener('submit', (event) => {
        // Stopper siden fra at genindlæse automatisk
        event.preventDefault(); 
        
        const userEmail = newsletterEmail.value.trim();
        
        // Viser den fine succes-besked direkte under linjen
        newsletterSuccess.textContent = `Tak! Vi har sendt din 10% rabatkode til: ${userEmail}`;
        
        // Tømmer feltet igen
        newsletterEmail.value = '';
        
        // Fjerner beskeden igen efter 6 sekunder automatisk
        setTimeout(() => {
            newsletterSuccess.textContent = '';
        }, 6000);
    });
}
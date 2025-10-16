// Galerie simple et robuste pour les réalisations

// Données des projets
const projetsData = {
    'cafe-aeroport': {
        titre: 'Café de l\'aéroport',
        images: [
            '../images/projes/café réstaurant AL MATAR/DSC_0007.JPG',
            '../images/projes/café réstaurant AL MATAR/DSC_0008.JPG',
            '../images/projes/café réstaurant AL MATAR/DSC_0010.JPG',
            '../images/projes/café réstaurant AL MATAR/DSC_0011.JPG'
        ]
    },
    'complexe-bahia': {
        titre: 'Complexe Bahia',
        images: [
            '../images/projes/Complexe Bahia/DSC_0063.JPG',
            '../images/projes/Complexe Bahia/DSC_0065.JPG',
            '../images/projes/Complexe Bahia/DSC_0067.JPG',
            '../images/projes/Complexe Bahia/DSC_0070.JPG',
            '../images/projes/Complexe Bahia/DSC_0073.JPG',
            '../images/projes/Complexe Bahia/DSC_0076.JPG',
            '../images/projes/Complexe Bahia/DSC_0077.JPG'
        ]
    },
    'complexe-sania-plage': {
        titre: 'Complexe Sania Plage',
        images: [
            '../images/projes/Compléxe Sania Plage/DSC_0115.JPG',
            '../images/projes/Compléxe Sania Plage/DSC_0117.JPG',
            '../images/projes/Compléxe Sania Plage/DSC_0120.JPG',
            '../images/projes/Compléxe Sania Plage/DSC_0122.JPG',
            '../images/projes/Compléxe Sania Plage/DSC_0124.JPG',
            '../images/projes/Compléxe Sania Plage/DSC_0126.JPG',
            '../images/projes/Compléxe Sania Plage/DSC_0127.JPG',
            '../images/projes/Compléxe Sania Plage/DSC_0130.JPG',
            '../images/projes/Compléxe Sania Plage/DSC_0131.JPG',
            '../images/projes/Compléxe Sania Plage/DSC_0132.JPG',
            '../images/projes/Compléxe Sania Plage/DSC_0136.JPG',
            '../images/projes/Compléxe Sania Plage/DSC_0140.JPG',
            '../images/projes/Compléxe Sania Plage/DSC_0141.JPG',
            '../images/projes/Compléxe Sania Plage/DSC_0143.JPG',
            '../images/projes/Compléxe Sania Plage/DSC_0144.JPG',
            '../images/projes/Compléxe Sania Plage/DSC_0145.JPG'
        ]
    },
    'ecole-ibrahim-al-razi': {
        titre: 'École Ibrahim Al-Razi',
        images: [
            '../images/projes/Ecole Baraim ER-RAZI/DSC_0012.JPG',
            '../images/projes/Ecole Baraim ER-RAZI/DSC_0014.JPG',
            '../images/projes/Ecole Baraim ER-RAZI/DSC_0015.JPG',
            '../images/projes/Ecole Baraim ER-RAZI/DSC_0018.JPG',
            '../images/projes/Ecole Baraim ER-RAZI/DSC_0022.JPG',
            '../images/projes/Ecole Baraim ER-RAZI/DSC_0023.JPG',
            '../images/projes/Ecole Baraim ER-RAZI/DSC_0025.JPG',
            '../images/projes/Ecole Baraim ER-RAZI/DSC_0027.JPG',
            '../images/projes/Ecole Baraim ER-RAZI/DSC_0029.JPG',
            '../images/projes/Ecole Baraim ER-RAZI/DSC_0030.JPG',
            '../images/projes/Ecole Baraim ER-RAZI/DSC_0031.JPG',
            '../images/projes/Ecole Baraim ER-RAZI/DSC_0032.JPG',
            '../images/projes/Ecole Baraim ER-RAZI/DSC_0034.JPG',
            '../images/projes/Ecole Baraim ER-RAZI/DSC_0036.JPG',
            '../images/projes/Ecole Baraim ER-RAZI/DSC_0037.JPG',
            '../images/projes/Ecole Baraim ER-RAZI/DSC_0038.JPG',
            '../images/projes/Ecole Baraim ER-RAZI/DSC_0040.JPG',
            '../images/projes/Ecole Baraim ER-RAZI/DSC_0041.JPG',
            '../images/projes/Ecole Baraim ER-RAZI/DSC_0042.JPG',
            '../images/projes/Ecole Baraim ER-RAZI/DSC_0044.JPG',
            '../images/projes/Ecole Baraim ER-RAZI/DSC_0045.JPG',
            '../images/projes/Ecole Baraim ER-RAZI/DSC_0046.JPG',
            '../images/projes/Ecole Baraim ER-RAZI/DSC_0047.JPG',
            '../images/projes/Ecole Baraim ER-RAZI/DSC_0049.JPG',
            '../images/projes/Ecole Baraim ER-RAZI/DSC_0050.JPG',
            '../images/projes/Ecole Baraim ER-RAZI/DSC_0052.JPG'
        ]
    },
    'salle-classe-miksta': {
        titre: 'Salle de classe Miksta',
        images: [
            '../images/projes/Mixta Essafia/DSC_0079.JPG',
            '../images/projes/Mixta Essafia/DSC_0080.JPG',
            '../images/projes/Mixta Essafia/DSC_0084.JPG',
            '../images/projes/Mixta Essafia/DSC_0086.JPG',
            '../images/projes/Mixta Essafia/DSC_0088.JPG',
            '../images/projes/Mixta Essafia/DSC_0089.JPG',
            '../images/projes/Mixta Essafia/DSC_0091.JPG',
            '../images/projes/Mixta Essafia/DSC_0095.JPG',
            '../images/projes/Mixta Essafia/DSC_0096.JPG',
            '../images/projes/Mixta Essafia/DSC_0097.JPG',
            '../images/projes/Mixta Essafia/DSC_0099.JPG'
        ]
    },
    'residence-al-quds': {
        titre: 'Résidence Al-Quds',
        images: [
            '../images/projes/Résidense Kouddous/DSC_0100.JPG',
            '../images/projes/Résidense Kouddous/DSC_0101.JPG',
            '../images/projes/Résidense Kouddous/DSC_0102.JPG',
            '../images/projes/Résidense Kouddous/DSC_0103.JPG',
            '../images/projes/Résidense Kouddous/DSC_0105.JPG',
            '../images/projes/Résidense Kouddous/DSC_0107.JPG',
            '../images/projes/Résidense Kouddous/DSC_0108.JPG',
            '../images/projes/Résidense Kouddous/DSC_0109.JPG'
        ]
    },
    'villa-ain-melloul': {
        titre: 'Villa Ain Melloul',
        images: [
            '../images/projes/Villas/DSC_0054.JPG',
            '../images/projes/Villas/DSC_0055.JPG',
            '../images/projes/Villas/DSC_0056.JPG',
            '../images/projes/Villas/DSC_0057.JPG',
            '../images/projes/Villas/DSC_0059.JPG',
            '../images/projes/Villas/DSC_0060.JPG',
            '../images/projes/Villas/DSC_0061.JPG',
            '../images/projes/Villas/DSC_0062.JPG',
            '../images/projes/Villas/DSC_0110.JPG',
            '../images/projes/Villas/DSC_0111.JPG',
            '../images/projes/Villas/DSC_0112.JPG',
            '../images/projes/Villas/DSC_0113.JPG'
        ]
    },
    'villa-cabo': {
        titre: 'Villa Cabo',
        images: [
            '../images/projes/Villas/DSC_0054.JPG',
            '../images/projes/Villas/DSC_0055.JPG',
            '../images/projes/Villas/DSC_0056.JPG',
            '../images/projes/Villas/DSC_0057.JPG',
            '../images/projes/Villas/DSC_0059.JPG',
            '../images/projes/Villas/DSC_0060.JPG',
            '../images/projes/Villas/DSC_0061.JPG',
            '../images/projes/Villas/DSC_0062.JPG',
            '../images/projes/Villas/DSC_0110.JPG',
            '../images/projes/Villas/DSC_0111.JPG',
            '../images/projes/Villas/DSC_0112.JPG',
            '../images/projes/Villas/DSC_0113.JPG'
        ]
    },
    'residence-al-amal': {
        titre: 'Résidence Al-Amal',
        images: [
            '../images/projes/Résidence el amal/DSC_0002.JPG',
            '../images/projes/Résidence el amal/DSC_0004.JPG',
            '../images/projes/Résidence el amal/DSC_0005.JPG',
            '../images/projes/Résidence el amal/DSC_0006.JPG'
        ]
    }
};

// Variables globales
let currentProjet = null;
let currentImageIndex = 0;

// Fonction pour ouvrir la galerie
function openGallery(projetId) {
    console.log('Ouverture galerie pour:', projetId);
    
    const projet = projetsData[projetId];
    if (!projet) {
        alert('Projet non trouvé!');
        return;
    }
    
    // Créer toutes les images en grille
    const imagesHTML = projet.images.map(image => `
        <div style="
            width: 300px;
            height: 200px;
            margin: 10px;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 8px rgba(0,0,0,0.3);
        ">
            <img src="${image}" alt="${projet.titre}" style="
                width: 100%;
                height: 100%;
                object-fit: cover;
                transition: transform 0.3s ease;
            " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
        </div>
    `).join('');
    
    // Créer la galerie HTML avec toutes les images
    const galleryHTML = `
        <div id="gallery-overlay" style="
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0,0,0,0.95); z-index: 9999;
            display: flex; flex-direction: column; align-items: center; justify-content: center;
            padding: 20px;
        ">
            <div style="
                position: absolute;
                top: 20px;
                left: 20px;
                right: 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                color: white;
                z-index: 10000;
            ">
                <h2 style="margin: 0; font-size: 28px; text-shadow: 2px 2px 4px rgba(0,0,0,0.8);">${projet.titre}</h2>
                <div style="margin-right: 20px;">
                    <button id="close-btn" style="
                        background: rgba(255,255,255,0.2);
                        border: none;
                        color: white;
                        font-size: 32px;
                        width: 50px;
                        height: 50px;
                        border-radius: 50%;
                        cursor: pointer;
                        font-weight: bold;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        transition: all 0.3s ease;
                        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
                    " title="Fermer la galerie"
                    onmouseover="this.style.background='rgba(255,255,255,0.4)'; this.style.transform='scale(1.1)'" 
                    onmouseout="this.style.background='rgba(255,255,255,0.2)'; this.style.transform='scale(1)'">
                        ×
                    </button>
                </div>
            </div>
            
            <div style="
                width: 100%;
                height: 100%;
                overflow-y: auto;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                align-items: flex-start;
                padding: 80px 20px 20px 20px;
                gap: 10px;
            ">
                ${imagesHTML}
            </div>
            
            <div style="
                position: absolute;
                bottom: 20px;
                left: 20px;
                right: 20px;
                display: flex;
                justify-content: center;
                color: white;
                font-size: 16px;
                font-weight: bold;
                text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
            ">
                <span>${projet.images.length} photos du projet</span>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', galleryHTML);
    document.body.style.overflow = 'hidden';
    currentProjet = projetId;
    currentImageIndex = 0;
    
    document.getElementById('close-btn').addEventListener('click', function() {
        console.log('Bouton X cliqué!');
        closeGallery();
    });
    
    document.getElementById('gallery-overlay').addEventListener('click', function(e) {
        if (e.target.id === 'gallery-overlay') {
            console.log('Clic sur overlay, fermeture...');
            closeGallery();
        }
    });
}

// Fonction pour fermer la galerie
function closeGallery() {
    console.log('Fermeture de la galerie...');
    const overlay = document.getElementById('gallery-overlay');
    if (overlay) {
        overlay.remove();
        document.body.style.overflow = '';
        currentProjet = null;
        currentImageIndex = 0;
        console.log('Galerie fermée avec succès!');
    } else {
        console.log('Overlay non trouvé!');
    }
}

// Fonction pour image suivante
function nextImage() {
    if (!currentProjet) return;
    
    const projet = projetsData[currentProjet];
    currentImageIndex = (currentImageIndex + 1) % projet.images.length;
    
    const image = document.getElementById('gallery-image');
    const counter = document.getElementById('image-counter');
    
    if (image) {
        image.src = projet.images[currentImageIndex];
        console.log(`Image ${currentImageIndex + 1}/${projet.images.length} chargée`);
    }
    if (counter) counter.textContent = `${currentImageIndex + 1} / ${projet.images.length}`;
}

// Fonction pour image précédente
function previousImage() {
    if (!currentProjet) return;
    
    const projet = projetsData[currentProjet];
    currentImageIndex = currentImageIndex === 0 ? projet.images.length - 1 : currentImageIndex - 1;
    
    const image = document.getElementById('gallery-image');
    const counter = document.getElementById('image-counter');
    
    if (image) {
        image.src = projet.images[currentImageIndex];
        console.log(`Image ${currentImageIndex + 1}/${projet.images.length} chargée`);
    }
    if (counter) counter.textContent = `${currentImageIndex + 1} / ${projet.images.length}`;
}

// Navigation au clavier
document.addEventListener('keydown', function(e) {
    if (!currentProjet) return;
    
    switch(e.key) {
        case 'ArrowLeft':
            previousImage();
            break;
        case 'ArrowRight':
            nextImage();
            break;
        case 'Escape':
            closeGallery();
            break;
    }
});

// Initialisation quand la page est chargée
document.addEventListener('DOMContentLoaded', function() {
    console.log('Page chargée, initialisation...');
    
    // Ajouter les événements aux boutons "Voir Plus"
    const buttons = document.querySelectorAll('.voir-plus-btn');
    console.log('Boutons trouvés:', buttons.length);
    
    buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const card = button.closest('.projet-card');
            const projetId = card.getAttribute('data-projet');
            
            console.log('Clic sur bouton pour projet:', projetId);
            openGallery(projetId);
        });
    });
    
    console.log('Initialisation terminée!');
});

// Fonction de test globale
window.testGallery = function() {
    console.log('Test de la galerie...');
    openGallery('cafe-aeroport');
}; 
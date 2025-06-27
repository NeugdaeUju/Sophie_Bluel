// Récupération des travaux depuis l'API
const reponse = await fetch("http://localhost:5678/api/works");
works = await reponse.json();

// Fonction pour créer les fiches des travaux
function generateWorks(works) {
    for(let i = 0 ; i < works.length ; i++ ) {
        const article = works[i];

        // Récupértion de l'élément du DOM qui accueillera les élements
        const sectionGallery = document.querySelector(".gellery");
        // Création d'une balise dédier à un travail
        const workElement = document.createElement("figure");
        // Création des balises de contenu
        const imageElement = document.createElement("img");
        imageElement.src = works.imageUrl;
        const captionElement = document.createElement("figcaption");
        captionElement.innerText = works.title;

        // On rattache la balise figure à la gallerie
        sectionGallery.appendChild(workElement);
        // On rattache les éléments à la balise figure
        workElement.appendChild(imageElement);
        workElement.appendChild(captionElement);
    };

}
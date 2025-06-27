// Récupération des travaux depuis l'API
const reponse = await fetch("http://localhost:5678/api/works");
works = await reponse.json();

// Fonction pour créer les fiches des travaux
function generateWorks(works) {
    for(let i = 0 ; i < works.length ; i++ ) {
        const article = works[i];
    }

}
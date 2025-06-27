// Récupération des travaux depuis l'API
const reponse = await fetch("http://localhost:5678/api/works");
works = await reponse.json();
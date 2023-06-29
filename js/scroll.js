// Sélectionnez tous les liens avec la classe "scroll-link"
const scrollLinks = document.querySelectorAll('.scroll-link');

// Ajoutez un gestionnaire d'événement pour chaque lien
scrollLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        // Empêchez le comportement par défaut du lien
        event.preventDefault();

        // Obtenez l'élément cible de l'attribut href du lien
        const target = document.querySelector(link.getAttribute('href'));

        // Effectuez le défilement en utilisant la méthode scrollTo() avec l'option behavior: 'smooth'
        target.scrollIntoView({ behavior: 'smooth' });
    });
});
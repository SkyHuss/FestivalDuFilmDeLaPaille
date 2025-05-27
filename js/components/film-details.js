document.addEventListener('DOMContentLoaded', function() {
    // Données des films (normalement, ces données proviendraient d'une API ou d'une base de données)
    const filmsData = [
        {
            id: 1,
            title: "L'amour ouf",
            year: "2024",
            duration: "1h 52min",
            genre: "Drame",
            director: "Gilles Lellouche",
            synopsis: "Un récit bouleversant sur les affres de l'amour dans un Paris contemporain où se croisent des destins singuliers. Le film explore les relations complexes entre plusieurs personnages dont les vies s'entremêlent au fil des rencontres et des séparations.",
            rating: "★★★★☆",
            image: "images/films/film1.webp",
            cast: "Léa Seydoux, Vincent Cassel, Adèle Exarchopoulos, François Civil",
            country: "France",
            language: "Français",
            release: "15 Mai 2024"
        },
        {
            id: 2,
            title: "Les jours heureux",
            year: "2023",
            duration: "2h 10min",
            genre: "Comédie",
            director: "Léa Seydoux",
            synopsis: "Un été dans le sud de la France, une famille se retrouve pour les dernières vacances dans leur maison familiale avant sa vente. Entre nostalgie, tensions et réconciliations, chacun fait face à ses propres démons tandis que la maison devient le témoin silencieux de leur histoire commune.",
            rating: "★★★★★",
            image: "images/films/film2.webp",
            cast: "Omar Sy, Virginie Efira, Benoît Magimel, Camille Cottin",
            country: "France",
            language: "Français",
            release: "12 Octobre 2023"
        },
        {
            id: 3,
            title: "Nocturne",
            year: "2024",
            duration: "1h 43min",
            genre: "Thriller",
            director: "Vincent Cassel",
            synopsis: "Dans les rues sombres de Marseille, un détective traque un tueur en série qui ne frappe que les nuits de pleine lune. Alors que l'enquête avance, le policier découvre que l'affaire pourrait être liée à un traumatisme de son propre passé, brouillant la frontière entre enquêteur et suspect.",
            rating: "★★★☆☆",
            image: "images/films/film3.webp",
            cast: "Jean Dujardin, Mélanie Laurent, Mathieu Kassovitz, Sara Forestier",
            country: "France",
            language: "Français",
            release: "3 Janvier 2024"
        },
        {
            id: 4,
            title: "La dernière danse",
            year: "2023",
            duration: "1h 35min",
            genre: "Drame musical",
            director: "Marion Cotillard",
            synopsis: "L'histoire émouvante d'une ancienne danseuse étoile qui tente de renouer avec sa passion malgré la maladie. Alors qu'elle prépare un dernier spectacle avec ses anciens partenaires, elle se confronte à ses limites physiques et aux fantômes de son glorieux passé.",
            rating: "★★★★☆",
            image: "images/films/film4.webp",
            cast: "Isabelle Huppert, Juliette Binoche, Denis Podalydès, Louis Garrel",
            country: "France",
            language: "Français",
            release: "8 Novembre 2023"
        }
    ];

    // Sélection des éléments du DOM
    const modal = document.getElementById('film-modal');
    const closeBtn = document.querySelector('.close-modal');
    const detailsButtons = document.querySelectorAll('.btn-details');
    
    // Fonction pour ouvrir la modal avec les détails du film
    function openFilmDetails(filmId) {
        // Trouver les données du film par ID (dans un vrai projet, vous pourriez faire une requête API ici)
        const film = filmsData.find(f => f.id === filmId);
        
        if (!film) return;
        
        // Remplir la modal avec les détails du film
        document.getElementById('modal-img').src = film.image;
        document.getElementById('modal-img').alt = film.title;
        document.getElementById('modal-rating').innerHTML = film.rating;
        document.getElementById('modal-title').textContent = film.title;
        document.getElementById('modal-metadata').innerHTML = `
            <span>${film.year}</span>
            <span>•</span>
            <span>${film.duration}</span>
            <span>•</span>
            <span>${film.genre}</span>
        `;
        document.getElementById('modal-director').textContent = film.director;
        document.getElementById('modal-country').textContent = film.country;
        document.getElementById('modal-language').textContent = film.language;
        document.getElementById('modal-release').textContent = film.release;
        document.getElementById('modal-synopsis').textContent = film.synopsis;
        document.getElementById('modal-cast').textContent = film.cast;
        
        // Afficher la modal
        modal.style.display = 'block';
        
        // Empêcher le défilement du body
        document.body.style.overflow = 'hidden';
    }
    
    // Ajouter des attributs data-id aux boutons de détails
    detailsButtons.forEach((button, index) => {
        button.setAttribute('data-id', index + 1);
        
        // Ajouter des écouteurs d'événements pour chaque bouton
        button.addEventListener('click', function() {
            const filmId = parseInt(this.getAttribute('data-id'));
            openFilmDetails(filmId);
        });
    });
    
    // Fermer la modal quand on clique sur le X
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Fermer la modal si on clique en dehors du contenu
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Fermer la modal avec la touche Échap
    window.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});
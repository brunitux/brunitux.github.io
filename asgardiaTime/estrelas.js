function createStars() {
    const numStars = 200; // Número de estrelas
    const starsContainer = document.getElementById('stars');

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDuration = `${Math.random() * 15 + 10.5}s`; // Duração da animação entre 0.5 e 2.5 segundos
        starsContainer.appendChild(star);
    }
}

// Inicia a animação das estrelas
function animateStars() {
    createStars(); // Cria as estrelas
}

animateStars(); // Inicia a animação quando o script é carregado
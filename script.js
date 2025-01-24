// Gerar pontos luminosos dinamicamente
function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.classList.add('particles');

    for (let i = 0; i < 100; i++) { // 100 pontos luminosos
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = `${Math.random() * 100}vw`; // Posição horizontal aleatória
        particle.style.top = `${Math.random() * 100}vh`; // Posição vertical aleatória
        particle.style.animationDuration = `${Math.random() * 4 + 2}s`; // Duração aleatória da animação
        particle.style.animationDelay = `${Math.random() * 2}s`; // Atraso aleatório para iniciar a animação
        particlesContainer.appendChild(particle);
    }

    document.body.appendChild(particlesContainer);
}

// Verifica se o DOM está carregado antes de criar os pontos
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
});

// Scroll suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

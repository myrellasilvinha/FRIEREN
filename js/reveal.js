const elements = document.querySelectorAll('.scroll-text');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            // Remove ao sair da tela → permite repetir
            entry.target.classList.remove('active');
        }
    });
}, {
    threshold: 0.2
});

elements.forEach(el => observer.observe(el));

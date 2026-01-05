const imgObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle('active', entry.isIntersecting);

        entry.target.querySelectorAll('span').forEach(span => {
            span.style.transform = entry.isIntersecting ? 'translateY(0)' : 'translateY(60px)';
            span.style.opacity = entry.isIntersecting ? '1' : '0';
        });
    });
}, { threshold: 0.3 });

document.querySelectorAll('.scroll-img').forEach(el => imgObserver.observe(el));

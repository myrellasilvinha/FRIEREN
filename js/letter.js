const letterElements = document.querySelectorAll('.scroll-type');

letterElements.forEach(el => {
    const text = el.textContent.trim();
    el.textContent = '';

    [...text].forEach((char, i) => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.style.animationDelay = `${i * 0.30}s`;
        el.appendChild(span);
    });
});

const letterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, {
    threshold: 0.6
});

letterElements.forEach(el => letterObserver.observe(el));

const imgElement = document.querySelector('.scroll-img');

const imgObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, {
    threshold: 0.6
});

imgObserver.observe(imgElement);

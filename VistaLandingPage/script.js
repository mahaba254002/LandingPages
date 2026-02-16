document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('main-header');

    // Header scroll background effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    });

    // Simple interaction for stats (count up effect could be added here later)
    console.log('Vista Landing Page Initialized');
});

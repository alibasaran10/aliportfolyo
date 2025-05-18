document.addEventListener('DOMContentLoaded', function() {
    // Footer için genellikle fazla JavaScript gerekmez
    // Ancak ek interaktif özellikler eklenebilir

    // Örneğin: Yılı otomatik güncelleme
    const yearSpan = document.querySelector('.footer-bottom p');
    if (yearSpan) {
        const currentYear = new Date().getFullYear();
        yearSpan.innerHTML = yearSpan.innerHTML.replace(/2023|Yıl/g, currentYear);
    }

    // Sosyal medya linklerine hover efekti
    const socialLinks = document.querySelectorAll('.social-links a');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});
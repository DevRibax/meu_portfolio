document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');
    const header = document.querySelector('.header');

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('nav-active');
    });

    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('nav-active');
        });
    });

    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'var(--branco)';
            header.style.backdropFilter = 'none';
        }
    });

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const name = formData.get('name') || 'Não informado';
            const email = formData.get('email') || 'Não informado';
            const subject = formData.get('subject') || 'Não informado';
            const message = formData.get('message') || 'Não informado';
            
            const whatsappMessage = `Olá Juan! Me chamo ${name}. ${message} - Assunto: ${subject} - Email: ${email}`;
            const encodedMessage = encodeURIComponent(whatsappMessage);
            const whatsappURL = `https://wa.me/5594992110073?text=${encodedMessage}`;
            
            window.open(whatsappURL, '_blank');
            contactForm.reset();
            
            alert('Redirecionando para o WhatsApp!');
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
// Active Link Highlighting
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split("/").pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        if(link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
    
    const links = document.querySelectorAll('.nav-link');

    links.forEach(link => {
        link.classList.remove('active'); // pastikan semua tidak aktif dulu

        if (link.href === window.location.href) {
        link.classList.add('active'); // aktifkan hanya halaman yang sedang dibuka
        }
    });

    // Simple Form Validation for Contact Page
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (!name || !email || !message) {
                alert('Mohon lengkapi semua field.');
                return;
            }

            if (!email.includes('@')) {
                alert('Mohon masukkan email yang valid.');
                return;
            }

            // Simulate sending
            const btn = this.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;
            btn.innerHTML = 'Mengirim...';
            btn.disabled = true;

            setTimeout(() => {
                alert('Pesan berhasil terkirim!');
                contactForm.reset();
                btn.innerHTML = originalText;
                btn.disabled = false;
            }, 1500);
        });
    }

    // Sticky Navbar Effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-sm');
        } else {
            navbar.classList.remove('shadow-sm');
        }
    });

    // Gallery Modal Image
    const galleryModal = document.getElementById('galleryModal');
    if (galleryModal) {
        galleryModal.addEventListener('show.bs.modal', function (event) {
            const button = event.relatedTarget;
            const imgSrc = button.getAttribute('src');
            const modalImg = galleryModal.querySelector('.modal-body img');
            modalImg.src = imgSrc;
        });
    }
});

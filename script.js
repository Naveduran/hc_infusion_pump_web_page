// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
        });
    }
    
    // Form submission handling
    const collaborateForm = document.querySelector('#collaborate-form');
    if (collaborateForm) {
        collaborateForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const contributions = [];
            formData.getAll('contribution').forEach(value => contributions.push(value));
            
            const emailBody = `
New Collaboration Request:

Name: ${formData.get('name')}
Email: ${formData.get('email')}
Profession: ${formData.get('profession')}
Experience: ${formData.get('experience')}
Contributions: ${contributions.join(', ')}
Availability: ${formData.get('availability')}
Location: ${formData.get('location')}
Additional Info: ${formData.get('additional-info')}
`;
            
            const mailtoLink = `mailto:nverad@unal.edu.co?subject=OpenCortisol Collaboration Request&body=${encodeURIComponent(emailBody)}`;
            window.location.href = mailtoLink;
        });
    }
})

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
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
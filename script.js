// HAMBURGER MENU
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu-overlay');

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    const icon = hamburger.querySelector('i');
    const isOpen = mobileMenu.classList.contains('active');
    
    if (isOpen) {
      mobileMenu.classList.remove('active');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      icon.className = 'bi bi-list';
      icon.style.color = '#2D7EB4'; 
    } else {
      mobileMenu.classList.add('active');
      hamburger.classList.add('open');
      hamburger.setAttribute('aria-expanded', 'true');
      icon.className = 'bi bi-x';
      icon.style.color = 'white'; 
    }
  });

  const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      const icon = hamburger.querySelector('i');
      icon.className = 'bi bi-list';
      icon.style.color = '#2D7EB4'; 
    });
  });
}

// CONTACT FORM
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const form = e.target;
            const button = form.querySelector('button[type="submit"]');
            const originalText = button.textContent;
            
            // Show loading state
            button.textContent = 'Sending...';
            button.disabled = true;
            
            try {
                const response = await fetch(form.action, {
                    method: 'POST',
                    body: new FormData(form),
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                
                if (response.ok) {

                    formMessage.style.display = 'block';
                    formMessage.textContent = 'Thank you! Your message has been sent. I\'ll get back to you soon.';
                    formMessage.style.backgroundColor = '#e8f5e8';
                    formMessage.style.color = '#2d7eb4';
                    

                    form.reset();
                    
                    setTimeout(() => {
                        formMessage.style.display = 'none';
                    }, 3000);
                } else {
                    throw new Error('Failed to send message');
                }
            } catch (error) {

                formMessage.style.display = 'block';
                formMessage.textContent = 'Sorry, there was an error sending your message. Please try again or email me directly at lucyjacobson11@gmail.com';
                formMessage.style.backgroundColor = '#fde8e8';
                formMessage.style.color = '#d32f2f';
            } finally {

                button.textContent = originalText;
                button.disabled = false;
            }
        });
    }
});
const form =  document.getElementById('contactForm');
const feedback = document.getElementById('feedback');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    feedback.classList.add('show');
    form.reset()
}
    
);

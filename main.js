// Form validation for contact form
document.getElementById('contact-form').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Please fill out all fields.');
        event.preventDefault(); // Prevent form submission
    }
});

// Change background color of the homepage
document.getElementById('change-bg-btn')?.addEventListener('click', function() {
    document.body.style.backgroundColor = 'lightblue'; // You can change this color to any preferred color
});

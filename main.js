// Function to validate the contact form
document.getElementById('contact-form')?.addEventListener('submit', function(event) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Please fill out all fields.');
        event.preventDefault(); // Prevent form submission
    }
});

// Function to change background color on button click (Only on homepage)
document.getElementById('change-bg-btn')?.addEventListener('click', function() {
    const colors = ['#ff6f61', '#de8f5d', '#a2c2e4', '#7f9a65'];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
});

// Function to toggle skill details
document.querySelectorAll('.skill-btn').forEach(button => {
    button.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target');
        const detail = document.getElementById(targetId);
        
        // Toggle visibility
        if (detail.style.display === 'block') {
            detail.style.display = 'none';
        } else {
            document.querySelectorAll('.skill-detail').forEach(d => d.style.display = 'none');
            detail.style.display = 'block';
        }
    });
});

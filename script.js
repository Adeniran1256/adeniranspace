// Open Modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

// Close Modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Form submission event
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    document.getElementById('form-response').innerText = 'Thank you for reaching out!';
    document.getElementById('contact-form').reset(); // Reset form fields
});

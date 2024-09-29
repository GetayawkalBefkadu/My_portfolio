// JavaScript for Dark/Light Mode Toggle
const toggleButton = document.getElementById('toggleMode');
const body = document.body; // Get the body element

toggleButton.addEventListener('click', () => {
    // Check the current mode and switch
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode'); // Remove light mode
        body.classList.add('dark-mode'); // Add dark mode
        toggleButton.textContent = 'Switch to Light Mode'; // Update button text
    } else {
        body.classList.remove('dark-mode'); // Remove dark mode
        body.classList.add('light-mode'); // Add light mode
        toggleButton.textContent = 'Switch to Dark Mode'; // Update button text
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default anchor click behavior
        const targetId = this.getAttribute('href').substring(1); // Get the target section ID
        const targetElement = document.getElementById(targetId); // Find the target section
        
        // Smoothly scroll to the target section
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop, // Scroll to the top of the target section
                behavior: 'smooth' // Smooth scrolling animation
            });
        }
    });
});

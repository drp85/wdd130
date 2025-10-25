/*
  This script handles the functionality for the dropdown menu in the footer.
  It's designed to be accessible and reusable across all pages.
*/

document.addEventListener('DOMContentLoaded', function() {
    const dropbtn = document.querySelector('.dropbtn');
    const dropdownContent = document.getElementById('myDropdown');

    if (!dropbtn || !dropdownContent) {
        return; // Exit if dropdown elements are not on the page
    }

    // Toggle dropdown on button click
    dropbtn.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent the window.onclick from firing immediately
        const isExpanded = dropdownContent.classList.toggle('show');
        dropbtn.setAttribute('aria-expanded', isExpanded);
    });

    // Close the dropdown if the user clicks outside of it
    window.addEventListener('click', function(event) {
        if (dropdownContent.classList.contains('show')) {
            dropdownContent.classList.remove('show');
            dropbtn.setAttribute('aria-expanded', 'false');
        }
    });

    // Close the dropdown if the user presses the Escape key
    window.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && dropdownContent.classList.contains('show')) {
            dropdownContent.classList.remove('show');
            dropbtn.setAttribute('aria-expanded', 'false');
        }
    });
});

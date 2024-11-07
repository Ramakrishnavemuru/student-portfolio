document.addEventListener("DOMContentLoaded", function() {
    // Select all anchor elements with the class 'external-link'
    const externalLinks = document.querySelectorAll('.external-link');
  
    // Add event listeners to each link
    externalLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action
  
        // Open the href link in a new tab
        const url = this.getAttribute('href');
        window.open(url, '_blank');
      });
    });
  });
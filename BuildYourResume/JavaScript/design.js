// Initialize Locomotive Scroll
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
    scrollbarContainer: document.querySelector('#container'), // Replace with your container
    offset: ['10%', 0], // Adjust the offset as needed
 });
 
 

// Heading animation start
function loadingAnimation() {
    gsap.from("#page1 h1", {
        y: 100,
        opacity: 0,
        delay: 0.5,
        duration: 0.9,
        stagger: 0.2
    });
}

loadingAnimation();

// Open image preview function
function openImagePreview(imagePath) {
    const modal = document.getElementById('imageModal');
    const previewImage = document.getElementById('previewImage');
    
    // Set the image source
    previewImage.src = imagePath;
    
    // Display the modal
    modal.style.display = 'block';
}

// Close image preview function
function closeImagePreview() {
    const modal = document.getElementById('imageModal');
    
    // Hide the modal
    modal.style.display = 'none';
}

// Scroll effect TEMPLATE
document.addEventListener('DOMContentLoaded', function () {
    const templateLink = document.getElementById('templateLink');
    const aboutLink = document.getElementById('aboutLink'); // Updated ID for the "About" link
    const page2 = document.getElementById('page2');
    const page3 = document.getElementById('page3');

    templateLink.addEventListener('click', function (event) {
        event.preventDefault();
        // Use Locomotive Scroll to scroll to the top of the second page
        scroll.scrollTo(page2);
    });

    aboutLink.addEventListener('click', function (event) {
        event.preventDefault();
        // Use Locomotive Scroll to scroll to the top of the third page (About section)
        scroll.scrollTo(page3);
    });
});

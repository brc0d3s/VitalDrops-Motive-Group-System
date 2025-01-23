window.onload = function () {
    const slider = document.getElementById("slider");
    const slides = slider.getElementsByTagName("img");
    let currentIndex = 0; // Start with the first slide
    const slideInterval = 3000; // 3 seconds per slide

    // Function to show the next slide
    function showNextSlide() {
        // Hide the current slide
        slides[currentIndex].style.display = "none";

        // Move to the next slide (or loop back to the first slide)
        currentIndex = (currentIndex + 1) % slides.length;

        // Show the next slide
        slides[currentIndex].style.display = "block";
    }

    // Start the slider
    setInterval(showNextSlide, slideInterval);
};

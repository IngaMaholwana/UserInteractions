document.addEventListener("DOMContentLoaded", function () {
    // === Dropdown Menu Logic ===
    document.querySelectorAll(".dropdown").forEach(dropdown => {
        const button = dropdown.querySelector(".dropdown-btn");
        button.addEventListener("click", () => {
            dropdown.classList.toggle("active");
        });

        // Close dropdown on outside click
        document.addEventListener("click", (e) => {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove("active");
            }
        });
    });

    // === Image Carousel Logic ===
    const carouselContainer = document.querySelector(".carousel-container");
    const slides = document.querySelectorAll(".slide");
    const prevButton = document.querySelector(".prev-btn");
    const nextButton = document.querySelector(".next-btn");
    const dotsContainer = document.querySelector(".dots");

    let currentIndex = 0;
    let autoSlideInterval;

    // Create navigation dots
    slides.forEach((_, index) => {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        if (index === 0) dot.classList.add("active");
        dot.addEventListener("click", () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll(".dot");

    function updateSlides() {
        slides.forEach((slide, index) => {
            slide.classList.toggle("active", index === currentIndex);
        });
        dots.forEach((dot, index) => {
            dot.classList.toggle("active", index === currentIndex);
        });
    }

    function goToSlide(index) {
        currentIndex = index;
        updateSlides();
        resetAutoSlide();
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlides();
        resetAutoSlide();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlides();
        resetAutoSlide();
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(nextSlide, 5000);
    }

    prevButton.addEventListener("click", prevSlide);
    nextButton.addEventListener("click", nextSlide);

    // Start automatic sliding
    resetAutoSlide();
});

let slideIndex = 1;

// Next/prev

plusSlides = n => {
    showSlides(slideIndex += n)
};

// thumbnail img controls

currentSlide = n => {
    showSlides(slideIndex = n)
};

showSlides = n => {
    let i;
    slides = document.getElementsByClassName("slider__slide");
    dots = document.getElementsByClassName("slider__view-style");

    if (n > slides.length) {
        slideIndex = 1
    } else  if (n < 1) {
        slideIndex = slides.length
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active-dot", "")
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active-dot"
};

showSlides(slideIndex);


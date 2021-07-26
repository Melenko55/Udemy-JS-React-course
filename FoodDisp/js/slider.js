window.addEventListener("DOMContentLoaded", () => {

    const prevArrow = document.querySelector(".offer__slider-prev"),
        nextArrow = document.querySelector(".offer__slider-next"),
        slides = document.querySelectorAll(".offer__slide"),
        total = document.querySelector("#total"),
        current = document.querySelector("#current"),
        slidesWrapper = document.querySelector(".offer__slider-wrapper"),
        slidesField = document.querySelector(".offer__slider-inner"),
        width = window.getComputedStyle(slidesWrapper).width;

    let currentSlide = 1;
    let offset = 0;

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
        current.textContent = `0${currentSlide}`;
    } else {
        total.textContent = slides.length;
        current.textContent = currentSlide;
    }

    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';

    slidesWrapper.style.overflow = 'hidden';

    slides.forEach( slide => {
        slide.style.width = width;
    });

    nextArrow.addEventListener('click', () => {
        if (offset == +width.slice(0, width.length - 2) * (slides.length - 1) ){
            offset = 0;
        } else {
            offset += +width.slice(0, width.length - 2);
        }

        if (currentSlide == slides.length) {
            currentSlide = 1;
        } else {
            currentSlide++;
        }

        if (slides.length < 10) {
            current.textContent = `0${currentSlide}`;
        } else {
            current.textContent = currentSlide;
        }

        slidesField.style.transform = `translateX(-${offset}px)`;
    });

    prevArrow.addEventListener('click', () => {
        if (offset == 0 ){
            offset = +width.slice(0, width.length - 2) * (slides.length - 1);
        } else {
            offset -= +width.slice(0, width.length - 2);
        }
        slidesField.style.transform = `translateX(-${offset}px)`;

        if (currentSlide == 1) {
            currentSlide = slides.length;
        } else {
            currentSlide--;
        }

        if (slides.length < 10) {
            current.textContent = `0${currentSlide}`;
        } else {
            current.textContent = currentSlide;
        }
    });

    /*showSlide(currentSlide);

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
    } else {
        total.textContent = slides.length;
    }

    function showSlide(index) {
        
        if (currentSlide > slides.length) {
            currentSlide = 1;
        }

        if (currentSlide < 1) {
            currentSlide = slides.length;
        }

        slides.forEach( (slide) => {
            slide.style.display = "none";
        });

        slides[currentSlide - 1].style.display = "block";
        if (currentSlide < 10) {
            current.textContent = `0${currentSlide}`;
        } else {
            current.textContent = currentSlide;
        }
    }

    function plusSlides(n) {
        showSlide(currentSlide += n);
    }

 

    prevArrow.addEventListener('click', () => plusSlides(-1));
    nextArrow.addEventListener('click', () => plusSlides(1));
*/


});
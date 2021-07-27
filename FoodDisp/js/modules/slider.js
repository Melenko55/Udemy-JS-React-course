function slider() {

    const prevArrow = document.querySelector(".offer__slider-prev"),
        nextArrow = document.querySelector(".offer__slider-next"),
        slides = document.querySelectorAll(".offer__slide"),
        slider = document.querySelector(".offer__slider"),
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

    slider.style.position = 'relative';

    const indicators = document.createElement('ol'),
        dots = [];


    indicators.classList.add('carousel-indicators');
    slider.append(indicators);

    //Creating dots with indexes and pushing them into the array
    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        if (i == 0) {
            dot.style.opacity = 1;
        }
        dot.setAttribute('data-slide-to', i + 1);
        dot.classList.add("dot");
        indicators.append(dot);   
        dots.push(dot);
    }
    const moveSlide = () => slidesField.style.transform = `translateX(-${offset}px)`;

    function showDots() {
        dots.forEach(dot => {
            dot.style.opacity = '.5';
        });

        dots[currentSlide - 1].style.opacity = 1;
    }

    function changeSlidesNumber() {
        if (slides.length < 10) {
            current.textContent = `0${currentSlide}`;
        } else {
            current.textContent = currentSlide;
        }
    }

    function makeChanges() {
        showDots();
        changeSlidesNumber();
        moveSlide();
    }

    function replaceDigits(str) {
        return +str.replace(/\D/g, '');
    }

    nextArrow.addEventListener('click', () => {
        if (offset == replaceDigits(width) * (slides.length - 1) ){
            offset = 0;
        } else {
            offset += replaceDigits(width);
        }

        if (currentSlide == slides.length) {
            currentSlide = 1;
        } else {
            currentSlide++;
        }

       makeChanges();   
    });

    prevArrow.addEventListener('click', () => {
        if (offset == 0 ){
            offset = replaceDigits(width) * (slides.length - 1);
        } else {
            offset -= replaceDigits(width);
        }
        slidesField.style.transform = `translateX(-${offset}px)`;

        if (currentSlide == 1) {
            currentSlide = slides.length;
        } else {
            currentSlide--;
        }

        makeChanges();
    });

    dots.forEach( dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');
            currentSlide = slideTo;
            offset = replaceDigits(width) * (slideTo - 1);

            makeChanges();
        });
    });

    
}

module.exports = slider;
    
    const prevArrow = document.querySelector(".offer__slider-prev"),
        nextArrow = document.querySelector(".offer__slider-next"),
        slides = document.querySelectorAll(".offer__slide"),
        total = document.querySelector("#total"),
        current = document.querySelector("#current");
       

    let currentSlide = 1;
    
    showSlide(currentSlide);

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



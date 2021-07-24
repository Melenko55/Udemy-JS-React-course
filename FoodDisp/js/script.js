window.addEventListener("DOMContentLoaded", () => {

    //Tabs
    const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove("tabheader__item_active");
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add("tabheader__item_active");
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;
        if (target && target.classList.contains("tabheader__item")) {
            tabs.forEach((item, i) => {
                if (item == target) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    //Timer 
    const deadline = '2021-09-21';

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
        days = Math.floor(t / (24000 * 60 * 60 )),
        hours = Math.floor((t / 3600000) % 24),
        minutes = Math.floor((t / 60000) % 60),
        seconds = Math.floor(t / 1000) % 60;
        return {
            "total": t,
            "days": days,
            "hours": hours,
            "minutes": minutes,
            "seconds": seconds
        };
    }

    function getZero(num) {
        if (num >=0 && num < 10) {
            return `0${num}`;
        } else {
            return `${num}`;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

            updateClock();


        function updateClock() {
            const t = getTimeRemaining(endtime);
            days.textContent = getZero(t.days);
            hours.textContent = getZero(t.hours);
            minutes.textContent = getZero(t.minutes);
            seconds.textContent = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }

    }

    setClock(".timer", deadline);



    //Modal

    const connectBtns = document.querySelectorAll("[data-modal]"),
        modal = document.querySelector(".modal"),
        modalExit = document.querySelector("[data-close]");

    
    connectBtns.forEach( btn => {
        btn.addEventListener("click", showModal);
    });

    modalExit.addEventListener("click", hideModal);

    modal.addEventListener('click', e => {
        if (e.target == modal) {
            hideModal();
        }
    });

    document.addEventListener('keydown', e => {
        if (e.code == "Escape" && modal.classList.contains('show')) {
            hideModal();
        }
    });

    window.addEventListener('scroll', showModalByScroll);

    function showModalByScroll() {
        {
            if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight)  {
                showModal();
                window.removeEventListener('scroll', showModalByScroll);
            }
        }
    }

    function showModal() {
        modal.classList.remove("hide");
        modal.classList.add("show");
        document.body.style.overflow = "hidden";
        clearInterval(modalTimerId);
    }

    function hideModal() {
        modal.classList.remove("show");
        modal.classList.add("hide");
        document.body.style.overflow = "";
    } 

    const modalTimerId = setTimeout(showModal, 10000);


    //Menu cards

    const cardContainer = document.querySelector("[data-cards]");

    console.log(cardContainer);
    class Card {
        constructor(src, alt, subtitle, description, price) {
            this.src = src;
            this.alt = alt;
            this.subtitle = subtitle;
            this.description = description;
            this.price = this.changeToUAH(price);
        }

        changeToUAH(price, exchangeRate = 27) {
            return exchangeRate * price;
        }

        createCard() {
            const element = document.createElement('div');
            element.classList.add("menu__item");
            element.innerHTML = `
            <img src=${this.src} alt=${this.alt}>
            <h3 class="menu__item-subtitle">${this.subtitle}</h3>
            <div class="menu__item-descr">${this.description}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
            </div>`;
            return element;
        }

        render(cardContainer) {
            cardContainer.append(this.createCard());
        }
    }

    const fitnessCard = new Card("img/tabs/vegy.jpg", "vegy", 'Меню "Фитнес"', 
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов.\
         Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!', 15);

    const premiumCard = new Card("img/tabs/elite.jpg", "elite", 'Меню “Премиум”',
    'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд.\
     Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!', 20);

     const meatlessCard = new Card("img/tabs/post.jpg", "post", 'Меню "Постное"', 
     'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения,\
      молоко из миндаля, овса, кокоса или гречки,\
       правильное количество белков за счет тофу и импортных вегетарианских стейков.', 17);

    fitnessCard.render(cardContainer);
    premiumCard.render(cardContainer);
    meatlessCard.render(cardContainer);
});
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

    function showModal() {
        modal.classList.remove("hide");
        modal.classList.add("show");
        document.body.style.overflow = "hidden";
    }

    function hideModal() {
        modal.classList.remove("show");
        modal.classList.add("hide");
        document.body.style.overflow = "";
    }

    
    
});
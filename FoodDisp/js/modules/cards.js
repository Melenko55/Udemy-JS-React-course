function cards() {
    //Menu cards

    const cardContainer = document.querySelector("[data-cards]");

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

    const getResource = async (url) => {
        const res =  await fetch(url);

        if (!res.ok) {
            throw new Error(`Couldn't fetch ${url}, status: ${res.status}`);
        }

    return await res.json();
    };


    // getResource('http://localhost:3000/menu')
    //      .then( data => createNewCardElement(data));      

    function createNewCardElement(data) {
            data.forEach( ({img, altimg, title, descr, price}) => {
                const element = document.createElement('div');
                element.classList.add("menu__item");
                element.innerHTML = `
                    <img src=${img} alt=${altimg}>
                    <h3 class="menu__item-subtitle">${title}</h3>
                    <div class="menu__item-descr">${descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${price}</span> грн/день</div>
                    </div>`;
                
                document.querySelector('.menu .container').append(element);
            });
    }

    axios.get('http://localhost:3000/menu')
        .then(data => {
        data.data.forEach( ({img, altimg, title, descr, price}) => {
            new Card(img, altimg, title, descr, price).render(cardContainer);
        });
    });
 
}

module.exports = cards;
function modal() {
    //Modal

    const connectBtns = document.querySelectorAll("[data-modal]"),
        modal = document.querySelector(".modal");
        

    
    connectBtns.forEach( btn => {
        btn.addEventListener("click", showModal);
    });

    modal.addEventListener('click', e => {
        if (e.target == modal || e.target.getAttribute('data-close') == '') {
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

    const modalTimerId = setTimeout(showModal, 50000);

}

module.exports = modal;
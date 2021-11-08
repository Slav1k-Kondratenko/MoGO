window.addEventListener('DOMContentLoaded', () => {

    // fixed header
    const header = document.querySelector('header'),
        introH = document.querySelector('#intro').clientHeight;

    function fixedHeader() {
        if (window.pageYOffset > introH) {
            header.classList.add('fixed');
        } else {
            header.classList.remove('fixed');
        }
    }
    fixedHeader();
    window.addEventListener('scroll', fixedHeader);


    // navToggle
    const nav = document.querySelector('#nav'),
        navToggle = document.querySelector('#nav_toggle');

    function showNav() {
        nav.classList.toggle('active');
        navToggle.classList.toggle('active');
    }

    navToggle.addEventListener('click', (e) => {
        e.preventDefault();
        showNav();
    });


    // smooth scroll
    function smoothScroll(trigerSelector, anchorSelector) {
        const triger = document.querySelectorAll(trigerSelector);

        triger.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();

                let elementId = item.getAttribute(anchorSelector);
                let elementOffset = document.querySelector(elementId).offsetTop;

                nav.classList.remove('active');
                navToggle.classList.remove('active');

                window.scroll({
                    top: elementOffset - 68,
                    behavior: 'smooth'
                });
            });
        });
    }

    smoothScroll('.nav__link', 'data-scroll');


    // collapse
    const triggerAccordion = document.querySelectorAll('.accordion__item');
    console.log(triggerAccordion);

    triggerAccordion.forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            item.classList.toggle('active');
        });
        
    });


    // slider
    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});


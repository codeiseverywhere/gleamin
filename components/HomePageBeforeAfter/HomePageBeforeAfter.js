window.addEventListener("DOMContentLoaded", () => {
    // Place Arrows Centered to Image Not Whole Slide

    const setArrows = () => {

        let newHeight = 0;

        const images = document.querySelectorAll('.hba__slide:not(.slick-cloned) .hba__slide-image-wrap');
        const arrowPrev = document.querySelector('.hba__content').querySelector('.slick-prev')
        const arrowNext = document.querySelector('.hba__content').querySelector('.slick-next')

        //console.log(images)
        newHeight = images[0].clientHeight;

        let middle = newHeight / 2;
        arrowPrev.style.top = `${middle}px`;
        arrowNext.style.top = `${middle}px`;
    }

    window.addEventListener('resize', () => {
        setArrows()
    })

    var arrowHeightInt;
    $('.hba__slider').on('init', function (event, slick) {
        arrowHeightInt = setInterval(() => {
          console.log($('.hba__slide:not(.slick-cloned) .hba__slide-image-wrap').first().find('img').length)
          console.log($('.hba__slide:not(.slick-cloned) .hba__slide-image-wrap').first().find('img').attr("class"))
            if ($('.hba__slide:not(.slick-cloned) .hba__slide-image-wrap').first().find('img').hasClass("lazyLoaded")) {
                setArrows();
                clearInterval(arrowHeightInt);
                console.log("cleared")
            }
            console.log("again")
            
        }, 200);
    });

    $(".hba__slider").slick({
    arrows: true,
    draggable: true,
    swipe: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // adaptiveHeight: true,
    responsive: [
        {
        breakpoint: 800,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
        },
    ]
    });

    $('.hba__slider').on('setPosition', function (event, slick) {
    setArrows()
    });


    // Show More / Show Less Feature
    //desktop
    const wraps = document.querySelectorAll('.hba__d-text-wrap');
    const readMoreBtns = document.querySelectorAll('.hba__read-more');
    const showLessBtns = document.querySelectorAll('.hba__show-less');
    //mobile
    const wrapsM = document.querySelectorAll('.hba__slide-text-wrap');
    const readMoreBtnsM = document.querySelectorAll('.hba__read-more--mobile');
    const showLessBtnsM = document.querySelectorAll('.hba__show-less--mobile');

    const showMore = (id) => {
    wraps.forEach(wrap => {
        const ID = wrap.dataset.index;
        if (ID == id) {
        wrap.classList.add('hba__d-text-wrap--full');
        }
    })
    }
    const showLess = (id) => {
    wraps.forEach(wrap => {
        const ID = wrap.dataset.index;
        if (ID == id) {
        wrap.classList.remove('hba__d-text-wrap--full');
        }
    })
    }
    const showMoreM = (id) => {
    wrapsM.forEach(wrap => {
        const ID = wrap.dataset.index;
        if (ID == id) {
        wrap.classList.add('hba__d-text-wrap--full');
        }
    })
    }
    const showLessM = (id) => {
    wrapsM.forEach(wrap => {
        const ID = wrap.dataset.index;
        if (ID == id) {
        wrap.classList.remove('hba__d-text-wrap--full');
        }
    })
    }

    readMoreBtns.forEach(btn => {
    const id = btn.dataset.index;
    btn.addEventListener('click', (e) => showMore(id));
    })
    showLessBtns.forEach(btn => {
    const id = btn.dataset.index;
    btn.addEventListener('click', (e) => showLess(id))
    })
    readMoreBtnsM.forEach(btn => {
    const id = btn.dataset.index;
    btn.addEventListener('click', (e) => showMoreM(id));
    })
    showLessBtnsM.forEach(btn => {
    const id = btn.dataset.index;
    btn.addEventListener('click', (e) => showLessM(id))
    })
});

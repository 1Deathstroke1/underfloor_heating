//slider
new Swiper('.hero__slider', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 10,
    navigation: {
        prevEl: '.hero__slider-btn_prev',
        nextEl: '.hero__slider-btn_next',
    },
    autoplay: {
        delay: 3000,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        560: {
            spaceBetween: 8,
        }
    }
});


//calc
const calcForm = document.querySelector('.js-calc-form');
const totalSquare = document.querySelector('.js-square');
const totalPrice = document.querySelector('.js-total-price');
const result = document.querySelector('.js-result');
const btnSubmit = document.querySelector('.js-submit');

const tariff = {
    economy: 550,
    comfort: 1400,
    premium: 2700,
}

calcForm.addEventListener('input', () => {
    if (calcForm.width.value > 0 && calcForm.length.value > 0) {
        btnSubmit.disabled = false
    } else {
        btnSubmit.disabled = true
    }
})


calcForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (calcForm.width.value > 0 && calcForm.length.value > 0) {
        const square = calcForm.width.value * calcForm.length.value;
        const price = (square * tariff[calcForm.tariff.value])

        result.style.display = 'block'

        totalSquare.textContent = `${square} кв м`;
        totalPrice.textContent = `${price} руб`;
    }
})

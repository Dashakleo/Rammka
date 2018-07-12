const   save_copy = document.querySelector('.description__btn-copy'),
        plan_choose = document.querySelector('.copy-popup__link-pack'),
        add_to_collect = document.querySelector('.description__collection-btn-add'),
        overlay = document.querySelector('.overlay'),
        popup_copy = document.querySelector('.description__copy-popup'),
        popup_plan = document.querySelector('.description__package-popup'),
        popup_add = document.querySelector('.description__collection-popup'),
        popup_buy_close = document.querySelector('#back-to-pic-buy'),
        popup_plan_close = document.querySelector('#back-to-pic-plan'),
        popup_add_close = document.querySelector('#back-to-pic-add'),
        package_variations = document.querySelector('#package_variations');

let fadeIn = (element) => {
    overlay.classList.add('visible');
    element.classList.remove('hidden');
    element.classList.add('visible');
};

let fadeOut = (element) => {
    element.classList.remove('visible');
    element.classList.add('hidden');
    overlay.classList.remove('visible');
};

let fadeOutVariations = (element, prevElement) => {
    element.classList.remove('visible');
    element.classList.add('hidden');
    prevElement.classList.remove('visible');
    prevElement.classList.add('hidden');
    overlay.classList.remove('visible');
}

save_copy.addEventListener('click', fadeIn.bind(null, popup_copy));
plan_choose.addEventListener('click', fadeIn.bind(null, popup_plan));
add_to_collect.addEventListener('click', fadeIn.bind(null, popup_add));
overlay.addEventListener('click', fadeOut.bind(null, popup_copy));
overlay.addEventListener('click', fadeOut.bind(null,popup_plan));
overlay.addEventListener('click', fadeOut.bind(null, popup_add));
popup_buy_close.addEventListener('click', fadeOut.bind(null, popup_copy));
popup_plan_close.addEventListener('click', fadeOutVariations.bind(null, package_variations, popup_copy));
popup_add_close.addEventListener('click', fadeOut.bind(null, popup_add));

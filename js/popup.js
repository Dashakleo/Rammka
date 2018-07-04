const   save_copy = document.querySelector('.picture__copy-dnlw-btn'),
        plan_choose = document.querySelector('.picture__popup-link-pack'),
        add_to_collect = document.querySelector('.picture__collection-add-btn'),
        overlay = document.querySelector('.overlay'),
        popup_copy = document.querySelector('.picture__popup-copy'),
        popup_plan = document.querySelector('.picture__popup-package'),
        popup_add = document.querySelector('.picture__popup-collection'),
        popup_buy_close = document.querySelector('.picture__popup-link-back');

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

save_copy.addEventListener('click', fadeIn.bind(null, popup_copy));
plan_choose.addEventListener('click', fadeIn.bind(null, popup_plan));
add_to_collect.addEventListener('click', fadeIn.bind(null, popup_add));
overlay.addEventListener('click', fadeOut.bind(null, popup_copy));
overlay.addEventListener('click', fadeOut.bind(null,popup_plan));
overlay.addEventListener('click', fadeOut.bind(null, popup_add));
popup_buy_close.addEventListener('click', fadeOut.bind(null, popup_copy));
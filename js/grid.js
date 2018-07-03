let elem = document.querySelector('.grid');
let msnry = new Masonry( elem, {
    // options
    itemSelector: '.grid__item',
    horizontalOrder: true,
    gutter: 10
});
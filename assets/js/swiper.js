let main = document.querySelector('.main');
let pagePagination = document.querySelector('.page_pagination'); 


let pageSlider = new Swiper('.page',{
    wrapperClass: "page_wrapper",
    slideClass: "page_screen",

    //вертикальный стайдер 
    direction: 'vertical',

    // количество слайдов для показа
    slidesPerView: 'auto',

    //паралакс
    parallax: true,

 
    mousewheel:{
        sensitivity: 1,
    },

    watchOverflow: true,
    speed: 800,
    observer: true,
    observerParents: true,
    observerSliderChildren: true,

    //навигация
    //буллеты

    pagination:{
        el: '.page_pagination',
        type:'bullets',
        clickable: true,
        bulletClass: "page_bullet",
        bulletActiveClass: "page_bullet_active",
    },

//scroll

    scrollbar:{
        el:'.page_scroll',
        dragClass: "page_drag-scroll",
        draggable: true,

    },

init: false,
//событие
on:{
    //событие иницилизации
    init: function(){
        menuSlider();
        setScrollType();
        main.classList.add('_loaded');
        pagePagination.classList.add('_loaded');

    },
    //событие смены слайда
    slideChanege: function(){
        menuSliderRemove();
        menuItems[pageSlider.realIndex].classList.add('_active');
    },

    resize: function () {
        setScrollType();
    }

},


});

/*
const menuItems = document.querySelectorAll('.menu-item[data-goto]')

if ( menuItems.length > 0){
    menuItems.forEach(menuItem => {
        menuItems[pageSlider.realIndex].classList.add('_active');
        menuItem.addEventListener("click", onMenuItemClick);
    });

    function onMenuItemClick(e){
        const menuItem = e.target;
        if(menuItem.dataset.goto && document.querySelector(menuItem.dataset.goto)){
            const gotoBlock = document.querySelector(menuItem.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
           
        }
    }
}
*/

let menuItems = document.querySelectorAll('.menu-item');

function menuSlider(){
    if ( menuItems.length > 0){
        menuItems[pageSlider.realIndex].classList.add('_active');
        for (let index = 0; index < menuItems.length; index++) {
            const menuItem = menuItems[index];
            menuItem.addEventListener("click", function(e){
                menuSliderRemove();
                pageSlider.slideTo(index, 800);
                menuItem.classList.add('_active');
                e.preventDefault();
            });
            
        }
    }
}

function menuSliderRemove(){
    let menuItemActive= document.querySelector('.menu-item._active');
    if (menuItemActive) {
        menuItemActive.classList.remove('_active');
    }
}


function setScrollType(){

    if (main.classList.contains('free')) {
        main.classList.remove('free');
        pageSlider.params.freeMode = false;
    }

    for (let index = 0; index < pageSlider.slides.length; index++) {
        const pageSlide = pageSlider.slides[index];
        const pageSlideContent = pageSlide.querySelector('.screen_content');

        if (pageSlideContent) {
            const pageSlideContentHeight = pageSlideContent.offsetHeight;
            if (pageSlideContentHeight > window.innerHeight) {
                main.classList.add('free');
                pageSlider.params.freeMode = true;
                break;
            }
        }
    }
}


pageSlider.init(); 
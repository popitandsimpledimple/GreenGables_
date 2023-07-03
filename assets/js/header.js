$(document).ready(function() {
	$('.main-header-burger').click(function(event) {
		$('.main-header-burger,#main-header-menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});


 

 
/*
$('a').click(function(){

    // Здесь пишем код, который будет закрывать меню
	var i, mainHeaderBurger;
	mainHeaderBurger = document.getElementsByClassName(".main-header-burger");

		mainHeaderBurger[i].style.display = "none";

}) */

 
function openCity(evt, cityName) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(cityName).style.display = "block";
	evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
//document.getElementById("defaultOpen").click(); 


//
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


//
document.getElementById("myForm").addEventListener("submit", function(event) {
	event.preventDefault(); // предотвращаем отправку формы по умолчанию
  
	// перенаправляем на страницу acc.html
	window.location.href = "/acc.html";
  });
  
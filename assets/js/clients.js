//---------мастер классы

$(document).ready(function(){
    $('.content_toggle').click(function(){
        $('.content_block').slideToggle(300, function(){
            if ($(this).is(':hidden')) {
                $('.content_toggle').html('Описание &#9660;');
                $('.content_toggle').removeClass('open');
            } else {
                $('.content_toggle').html('Скрыть текст &#9650;');
                $('.content_toggle').addClass('open');
            }							
        });
        return false;
    });
}); 

//-----------------------вкладки общие------
/*
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
document.getElementById("defaultOpen").click();

*/

function openClient(evt, contentClients) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(contentClients).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();



function openDelivery(e, Delivery) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent_Delivery");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks_deliverys");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(Delivery).style.display = "block";
    e.currentTarget.className += " active";
  }
  
  // Получите элемент с id="defaultOpen" и нажмите на него
  document.getElementById("delivery_fromOpen").click();
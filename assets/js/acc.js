function openAcc(evt, cityName) {
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


//-----------------------data
/*
const name1 = document.getElementById("name1");
const name2 = document.getElementById("name2");
name1.addEventListener("keyup", changeLength1);
name2.addEventListener("keyup", changeLength2);

function changeLength1() {
  name1.setAttribute("size", name1.value.length - 3);
}

function changeLength2() {
  name2.setAttribute("size", name2.value.length - 3);
}

changeLength1();
changeLength2(); */

function Mybtn(f) {
  document.getElementById('open_btn').style.display='flex';
  var input = document.getElementById('name');
  input.disabled = false;
  var input = document.getElementById('tl');
  input.disabled = false;
  var input = document.getElementById('email');
  input.disabled = false;
  var input = document.getElementById('male');
  input.disabled = false;
  var input = document.getElementById('female');
  input.disabled = false;
  var input = document.getElementById('date');
  input.disabled = false;
  var input = document.getElementById('address');
  input.disabled = false;

}



document.addEventListener('DOMContentLoaded', function(){
  const form = document.getElementById('form');
  form.addEventListener('submit', formSend);

  async function formSend(e){
    e.preventDefault();
    let error = formValidate(form);
  }

  function formValidate(form){
    let error = 0;
    let formReq = document.querySelectorAll('._req')

    for (let index = 0; index < formReq.length; index++){
      const input = formReq[index];
      formRemoveError(input);
      if (input.classList.contains('_email')){
        if(emailTest(input)){
          formAddError(input);
          error++;
        }
      
      }else if(input.getAttribute("type") === "checkbox" && input.checkbox === false){
        formAddError(input);
        error++;
      }else{
        if(input.value === ''){
          formAddError(input);
          error++;
        }
      }

    }
  }


  function formAddError(input){
    input.parentElementor.classList.add('_error');
    input.classList.add('_error');
  }

  function formRemoveError(input){
    input.parentElementor.classList.remove('_error');
    input.classList.remove('_error');
  }

  function emailTest(input){
    return /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(input.value);
  }


});
 


function Bun(){
  var input = document.getElementById('name');
  input.disabled = true;
  var input = document.getElementById('tl');
  input.disabled = true;
  var input = document.getElementById('email');
  input.disabled = true;
  var input = document.getElementById('male');
  input.disabled = true;
  var input = document.getElementById('female');
  input.disabled = true;
  var input = document.getElementById('date');
  input.disabled = true;
  var input = document.getElementById('address');
  input.disabled = true;

  document.getElementById('open_btn').style.display='none';
  alert("Hello");
}

//-----------------------------------------------

function Mybtndelivery(f) {
  document.getElementById('open_btn_delivery').style.display='flex';
  var input = document.getElementById('delivery-type-door');
  input.disabled = false;
  var input = document.getElementById('delivery-type-pickup');
  input.disabled = false;
}


function Bundelivery(){
  var input = document.getElementById('delivery-type-door');
  input.disabled = true;
  var input = document.getElementById('delivery-type-pickup');
  input.disabled = true;


  document.getElementById('open_btn_delivery').style.display='none';
  alert("Hello");
}

//---------------------------------------support


const Support = document.getElementById('support-form');
Support.addEventListener('submit', function(e) {
  e.preventDefault(); // Отменяем отправку формы

  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  Support.reset();

  alert("Отправка запроса в техническую поддержку:" 
  + "\nИмя: " + name 
  + "\nEmail: " + email
  + "\nСообщение: " + message);

});
 

//---------------------------------
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
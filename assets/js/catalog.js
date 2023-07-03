
//категории товара            выпад список  текстиль

/* Когда пользователь нажимает на кнопку, переключаться раскрывает содержимое */
function sortingCatalog() {
    document.getElementById("mysorting").classList.toggle("flex");
  }
  // Закрыть раскрывающийся список, если пользователь щелкнет за его пределами.
  window.onclick = function(event) {
    if (!event.target.matches('.sorting_dropbtn')) {
      var dropdowns = document.getElementsByClassName("sorting_content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('flex')) {
          openDropdown.classList.remove('flex');
        }
      }
    }
  } 

  /** 
  // вкладки 
  var i, tabcontent, tablinks;
  function openCity(evt, cityName) {
   
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += "active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();*/


// сортировака по категориям текстиль


    filterSelection("all")
    function filterSelection(c) {
      var x, i;
      x = document.getElementsByClassName("filterDiv");
      if (c == "all") c = "";
      for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
      }
    } 
    
    function w3AddClass(element, name) {
      var i, arr1, arr2;
      arr1 = element.className.split(" ");
      arr2 = name.split(" ");
      for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
      }
    }
    
    function w3RemoveClass(element, name) {
      var i, arr1, arr2;
      arr1 = element.className.split(" ");
      arr2 = name.split(" ");
      for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
          arr1.splice(arr1.indexOf(arr2[i]), 1);     
        }
      }
      element.className = arr1.join(" ");
    }




 

// сортировка по цене и рейтингу Textile

document.querySelector('#sort-asc').onclick = function(){
  mySortAsc('data-price');
} 

document.querySelector('#sort-desc').onclick = function(){
  mySortDesc('data-price');
} 

document.querySelector('#sort-rating').onclick = function(){
  mySortDesc('data-rating');
} 


function mySortAsc(sortType){ // по возрвст 
  let nav = document.querySelector('#nav');
  for (let i = 0; i < nav.children.length; i++){
    for (let j = i; j < nav.children.length; j++){
      if ( +nav.children[i].getAttribute(sortType) > +nav.children[j].getAttribute(sortType) ){
        replaceNode = nav.replaceChild(nav.children[j], nav.children[i]);
        insertAfter(replaceNode, nav.children[i]);
      }
    }
  }
}


function mySortDesc(sortType){  // по убыв
  let nav = document.querySelector('#nav');
  for (let i = 0; i < nav.children.length; i++){
    for (let j = i; j < nav.children.length; j++){
      if ( +nav.children[i].getAttribute(sortType) < +nav.children[j].getAttribute(sortType) ){
        replaceNode = nav.replaceChild(nav.children[j], nav.children[i]);
        insertAfter(replaceNode, nav.children[i]);
      }
    }
  }
}


function insertAfter(elem, refElem){
  return refElem.parentNode.insertBefore(elem, refElem.nextSibling)
}

//---------------------------------------------Souvenirs

function mySortAsc(sortType){ // по возрвст 
  let nav = document.querySelector('#nav2');
  for (let i = 0; i < nav.children.length; i++){
    for (let j = i; j < nav.children.length; j++){
      if ( +nav.children[i].getAttribute(sortType) > +nav.children[j].getAttribute(sortType) ){
        replaceNode = nav.replaceChild(nav.children[j], nav.children[i]);
        insertAfter(replaceNode, nav.children[i]);
      }
    }
  }
}


function mySortDesc(sortType){  // по убыв
  let nav = document.querySelector('#nav2');
  for (let i = 0; i < nav.children.length; i++){
    for (let j = i; j < nav.children.length; j++){
      if ( +nav.children[i].getAttribute(sortType) < +nav.children[j].getAttribute(sortType) ){
        replaceNode = nav.replaceChild(nav.children[j], nav.children[i]);
        insertAfter(replaceNode, nav.children[i]);
      }
    }
  }
}


//------------------------------------------Joinery_production


function mySortAsc(sortType){ // по возрвст 
  let nav = document.querySelector('#nav3');
  for (let i = 0; i < nav.children.length; i++){
    for (let j = i; j < nav.children.length; j++){
      if ( +nav.children[i].getAttribute(sortType) > +nav.children[j].getAttribute(sortType) ){
        replaceNode = nav.replaceChild(nav.children[j], nav.children[i]);
        insertAfter(replaceNode, nav.children[i]);
      }
    }
  }
}


function mySortDesc(sortType){  // по убыв
  let nav = document.querySelector('#nav3');
  for (let i = 0; i < nav.children.length; i++){
    for (let j = i; j < nav.children.length; j++){
      if ( +nav.children[i].getAttribute(sortType) < +nav.children[j].getAttribute(sortType) ){
        replaceNode = nav.replaceChild(nav.children[j], nav.children[i]);
        insertAfter(replaceNode, nav.children[i]);
      }
    }
  }
}


//-----------------------------------------Shipyard

function mySortAsc(sortType){ // по возрвст 
  let nav = document.querySelector('#nav4');
  for (let i = 0; i < nav.children.length; i++){
    for (let j = i; j < nav.children.length; j++){
      if ( +nav.children[i].getAttribute(sortType) > +nav.children[j].getAttribute(sortType) ){
        replaceNode = nav.replaceChild(nav.children[j], nav.children[i]);
        insertAfter(replaceNode, nav.children[i]);
      }
    }
  }
}


function mySortDesc(sortType){  // по убыв
  let nav = document.querySelector('#nav4');
  for (let i = 0; i < nav.children.length; i++){
    for (let j = i; j < nav.children.length; j++){
      if ( +nav.children[i].getAttribute(sortType) < +nav.children[j].getAttribute(sortType) ){
        replaceNode = nav.replaceChild(nav.children[j], nav.children[i]);
        insertAfter(replaceNode, nav.children[i]);
      }
    }
  }
}

//------------------------------------Auto-moto-velo


function mySortAsc(sortType){ // по возрвст 
  let nav = document.querySelector('#nav5');
  for (let i = 0; i < nav.children.length; i++){
    for (let j = i; j < nav.children.length; j++){
      if ( +nav.children[i].getAttribute(sortType) > +nav.children[j].getAttribute(sortType) ){
        replaceNode = nav.replaceChild(nav.children[j], nav.children[i]);
        insertAfter(replaceNode, nav.children[i]);
      }
    }
  }
}


function mySortDesc(sortType){  // по убыв
  let nav = document.querySelector('#nav5');
  for (let i = 0; i < nav.children.length; i++){
    for (let j = i; j < nav.children.length; j++){
      if ( +nav.children[i].getAttribute(sortType) < +nav.children[j].getAttribute(sortType) ){
        replaceNode = nav.replaceChild(nav.children[j], nav.children[i]);
        insertAfter(replaceNode, nav.children[i]);
      }
    }
  }
}














/*

//popup

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


// сколл сортировки
$(document).ready(function() {
	$('.main-header-burger').click(function(event) {
		$('.main-header-burger,#main-header-menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

*/
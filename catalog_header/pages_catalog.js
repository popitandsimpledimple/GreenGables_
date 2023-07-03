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






// сортировка по цене и рейтингу 

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
  

  
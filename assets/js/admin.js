
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


//-------------------------------master-class

/*const classForm = document.getElementById("classForm");

classForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const className = document.getElementById("className").value;
  const classDescription = document.getElementById("classDescription").value;
  const classPrice = document.getElementById("classPrice").value;
  const classDate = document.getElementById("classDate").value;
  const classTime = document.getElementById("classTime").value;
  const classImage = document.getElementById("classImage").files[0];

  // Создаем объект FormData и добавляем в него информацию о мастер-классе
   const formData = new FormData();
  formData.append("className", className);
  formData.append("classDescription", classDescription);
  formData.append("classPrice", classPrice);
  formData.append("classDate", classDate);
  formData.append("classTime", classTime);
  formData.append("classImage", classImage);

  // Отправляем данные на сервер
  fetch("/add-class", {
    method: "POST",
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    // Если данные успешно добавлены на сервер, то добавляем информацию о мастер-классе на страницу
    const classInfo = document.createElement("div");
    classInfo.innerHTML = 
    `<h2>${data.className}</h2>
      <p>${data.classDescription}</p>
      <p>Цена: ${data.classPrice} руб.</p>
      <p>Дата: ${data.classDate}</p>
      <p>Время: ${data.classTime}</p>
      <img src="${data.classImage}" alt="${data.className}">`
    ;
    document.body.appendChild(classInfo);

    // Очищаем форму
    classForm.reset();
    // Выводим сообщение об успешной отправке данных
  alert("Данные успешно отправлены!");
  classForm.reset();
});*/


const classForm = document.getElementById("classForm");

classForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const className = document.getElementById("className").value;
  const classDescription = document.getElementById("classDescription").value;
  const classPrice = document.getElementById("classPrice").value;
  const classDate = document.getElementById("classDate").value;
  const classTime = document.getElementById("classTime").value;
  const classImage = document.getElementById("classImage").files[0];
  
   /* // Создаем объект FormData и добавляем в него информацию о мастер-классе
   const formData = new FormData();
  formData.append("className", className);
  formData.append("classDescription", classDescription);
  formData.append("classPrice", classPrice);
  formData.append("classDate", classDate);
  formData.append("classTime", classTime);
  formData.append("classImage", classImage);

  // Отправляем данные на сервер
  fetch("/add-class", {
    method: "POST",
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    // Если данные успешно добавлены на сервер, то добавляем информацию о мастер-классе на страницу 

  // Добавляем информацию о мастер-классе на страницу
  const classInfo = document.createElement("div");
  classInfo.innerHTML = 
    `<h2>${className}</h2>
    <p>${classDescription}</p>
    <p>Цена: ${classPrice} руб.</p>
    <p>Дата: ${classDate}</p>
    <p>Время: ${classTime}</p>
    <img src="${classImage}" alt="${className}">`
  ;
  document.body.appendChild(classInfo); */

  // Очищаем форму
  classForm.reset();
  // Выводим сообщение об успешной отправке данных
alert("Данные успешно отправлены!"  + "\nНазвание товара: " + className + 
"\nОписание: " + classDescription + "\nЦена: " + classPrice + 
"\nДата: " + classDate + "\nВремя: " + classTime + 
"\nИзобр: " + classImage);

});


//-------------------------------------
const productForm = document.getElementById("product-form");

productForm.addEventListener("submit", function(event) {
  event.preventDefault();
  const productName = document.getElementById("product-name").value;
  const productDescription = document.getElementById("product-description").value;
  const productPrice = document.getElementById("product-price").value;
  const productWomenSize = document.getElementById("female-size").value;
  const productMenSize = document.getElementById("male-size").value;
  const productСolor = document.getElementById("product-color").value;
  const productImage = document.getElementById("product-image").files[0];


  // Очищаем форму
  productForm.reset();

  alert("Название товара: " + productName + 
  "\nОписание: " + productDescription + 
  "\nЦена: " + productPrice + 
  "\nЖенский размер: " + productWomenSize + 
  "\nМужской размер: " + productMenSize + "\nЦвет: " + productСolor + 
  "\nИзобр: " + productImage);
});


//------------------------------------------------
document.getElementById('return-form').addEventListener('submit', function(e) {
  e.preventDefault(); // Отменяем отправку формы

  var returnDescription = document.getElementById('return-description').value;
  
  // Создаем новый элемент списка с описанием возврата
  // var returnItem = document.createElement('li');
  // returnItem.textContent = returnDescription;
  
  // Добавляем элемент списка в список на странице
 // document.getElementById('return-list').appendChild(returnItem);

  alert(returnDescription);
  
  // Очищаем поле ввода
  document.getElementById('return-description').value = '';
});


//------------------------------------------------
const deliveryForm = document.getElementById("deliveryForm");
deliveryForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  
  // Get input values
  var deliveryPrice = document.getElementById("deliveryPrice").value;
  var deliveryInfoTo = document.getElementById("deliveryInfoTo").value;
  var deliveryInfoFrom = document.getElementById("deliveryInfoFrom").value;
  var generalInfo = document.getElementById("generalInfo").value;
  
  deliveryForm.reset();

  // Save the values or perform other actions
  alert("Цена доставки:" + deliveryPrice + "\nДоставка до цены доставки:" + deliveryInfoTo
  + "\nДоставка от цены доставки:" + deliveryInfoFrom + "\nОбщая информация:" + generalInfo);


  
});
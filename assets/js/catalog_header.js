const buttons = document.querySelectorAll(".tablink button");
    // Удаляем класс active у всех кнопок
    for (let j = 0; j < buttons.length; j++) {
      buttons[j].classList.remove("active");
    }

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
// Удаляем класс active у всех кнопок
    for (let j = 0; j < buttons.length; j++) {
      buttons[j].classList.remove("active");
    }
    // Добавляем класс active только нажатой кнопке
    this.classList.add("active");
  });
}


/*const tablinks = document.querySelectorAll(".tablinks_sort_a");

function addIcons() {
  if (window.innerWidth <= 700) { // Проверяем ширину экрана
    for (let i = 0; i < tablinks.length; i++) {
        
        const icon = document.createElement("span"); // Создаем элемент для иконки
        const link = tablinks[i].querySelector("a");
            if (link) {
            link.textContent = "";
            }
        icon.classList.add("icon"); // Добавляем класс для стилизации
        tablinks[i].appendChild(icon); // Добавляем иконку внутрь кнопки

     
      switch (i) { // Добавляем разные иконки для каждой кнопки
        case 0:
          icon.style.backgroundImage = "url(path/to/icon1.png)";
          break;
        case 1:
          icon.style.backgroundImage = "url(path/to/icon2.png)";
          break;
        case 2:
          icon.style.backgroundImage = "url(path/to/icon3.png)";
          break;
        case 3:
          icon.style.backgroundImage = "url(path/to/icon4.png)";
          break;
        case 4:
          icon.style.backgroundImage = "url(path/to/icon5.png)";
          break;
        default:
          break;
      }
    }
  } else { // Если ширина экрана больше 700px, восстанавливаем текст
    for (let i = 0; i < tablinks.length; i++) {
      const icon = tablinks[i].querySelector(".icon");
      if (icon) { // Если есть иконка, удаляем ее
        tablinks[i].removeChild(icon);
      }
      link.textContent = "Button " + (i + 1);
    }
  }
}

addIcons(); // Вызываем функцию при загрузке страницы

window.addEventListener("resize", addIcons); // Вызываем функцию при изменении ширины экрана


// Получить ввод
var input = document.querySelector("input[type=text]");

// Выполнение функции, когда пользователь отпускает клавишу на клавиатуре
input.addEventListener("keyup", function(event) {
  // Отмените действие по умолчанию, если необходимо
  event.preventDefault();
  // Цифра 13 — это клавиша «Enter» на клавиатуре.
  if (event.keyCode === 13) {
    // Активировать элемент кнопки щелчком
    document.querySelector("button[type=submit]").click();
  }
});*/
// Находим элементы на странице
const btnMinus = document.querySelector('[data-action="minus"]');
const btnPlus = document.querySelector('[data-action="plus"]');
const counter = document.querySelector('[data-counter]');

/*/ Отслеживаем клик на кнопку btnMinus
btnMinus.addEventListener('click', function () {

    // Проверяем чтобы счетчик был больше 1
    if (parseInt(counter.innerText) > 1) {
		// Изменяем текст в счетчике уменьшая его на 1
		counter.innerText = --counter.innerText;
	}

});
*/

// -------------------------------------------------------счётчик для всех



// Отслеживаем клик на кнопку btnPlus
btnPlus.addEventListener('click', function () {
	// Изменяем текст в счетчике увеличивая его на 1
	counter.innerText = ++counter.innerText;
})

// Добавляем прослушку на всем окне
window.addEventListener('click', function (event) {

    // Объявляем переменную для счетчика
    let counter;

    // Проверяем клик строго по кнопкам Плюс либо Минус
    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
		// Находим обертку счетчика
		const counterWrapper = event.target.closest('.counter-wrapper');
		// Находим див с числом счетчика
        counter = counterWrapper.querySelector('[data-counter]');
	}

	// Проверяем является ли элемент по которому был совершен клик кнопкой Плюс
	if (event.target.dataset.action === 'plus') {
		counter.innerText = ++counter.innerText;
	}

	// Проверяем является ли элемент по которому был совершен клик кнопкой Минус
	if (event.target.dataset.action === 'minus') {

		// Проверяем чтобы счетчик был больше 1
		if (parseInt(counter.innerText) > 1) {
			// Изменяем текст в счетчике уменьшая его на 1
			counter.innerText = --counter.innerText;
		} else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) {
			// Проверка на товар который находится в корзине
			console.log('IN CART!!!!');
			// Удаляем товар из корзины
			event.target.closest('.cart-item').remove();

			// Отображение статуса корзины Пустая / Полная
			toggleCartStatus();

			// Пересчет общей стоимости товаров в корзине
			calcCartPriceAndDelivery();
		}

	}

	// Проверяем клик на + или - внутри коризины
	if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')) {
		// Пересчет общей стоимости товаров в корзине
		calcCartPriceAndDelivery();
	}
});
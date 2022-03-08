let popup = document.querySelector('.popup'); // нашли попап
let edditButton = document.querySelector('.profile__edit-button'); // нашли кнопку, открывающую попап
let popupIconClose = document.querySelector('.popup__icon-close'); // нашли кнопку, закрывающую попап
let nameInput = document.querySelector('.popup__form-elements_type_input-name'); // форма поле ввода с именем
let jobInput = document.querySelector('.popup__form-elements_type_input-profession'); // форма с полем ввода профессия
let saveButton = document.querySelector('.popup__button'); // кнопка сохранить
let profileJob = document.querySelector('.profile__paragraph'); // сюда передается текст из поля ввода профессии
let profileName = document.querySelector('.profile__title'); // сюда передается текст из поля ввода имя
let formElement = document.querySelector('.popup__form'); // нашли форму


/*повесили на кнопку обработчик событий и написали функцию добавления класса при клике на кнопку (add - добавляет класс)*/

edditButton.addEventListener('click', function() {
	popup.classList.add('popup_opened');
});


/*убираем класс, который открывает попап (remove - удаляет класс)*/

popupIconClose.addEventListener('click', function() {
	popup.classList.remove('popup_opened');
	nameInput.value = '';
	jobInput.value = '';    /*очищаем окна полей ввода после закрытия попапа*/
});


function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value

    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent

	let nameInput = document.querySelector('.popup__form-elements_type_input-name').value;
	let jobInput = document.querySelector('.popup__form-elements_type_input-profession').value;
	document.querySelector('.profile__title').textContent = nameInput;
	document.querySelector('.profile__paragraph').textContent = jobInput;

};

formElement.addEventListener('submit', formSubmitHandler);


/*Закрываем попап при клике на кнопку "сохранить"*/

saveButton.addEventListener('click', function() {
	popup.classList.remove('popup_opened');
});


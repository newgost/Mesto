let Popup = document.querySelector('.popup'); // нашли попап
let EdditButton = document.querySelector('.edit-button'); // нашли кнопку, открывающую попап
let PopupIconClose = document.querySelector('.icon-close'); // нашли кнопку, закрывающую попап
let nameInput = document.querySelector('.popup__name'); // форма поле ввода с именем
let jobInput = document.querySelector('.popup__profession'); // форма с полем ввода профессия
let SaveButton = document.querySelector('.popup__button'); // кнопка сохранить
let ProfileJob = document.querySelector('.profile__paragraph'); // сюда передается текст из поля ввода


/*повесили на кнопку обработчик событий и написали функцию добавления класса при клике на кнопку (add - добавляет класс)*/

EdditButton.addEventListener('click', function() {
	Popup.classList.add('popup_opened');
});


/*убираем класс, который открывает попап (remove - удаляет класс)*/

PopupIconClose.addEventListener('click', function() {
	Popup.classList.remove('popup_opened');
	nameInput.value = '';
	jobInput.value = '';   /*очищаем окна полей ввода после закрытия попапа*/
});


/*получаем значения полей и вставляем их в .profile__paragraph*/

document.querySelector('button').addEventListener('click', GetValues);

function GetValues() {
	let nameInput = document.querySelector('.popup__name').value;
	let jobInput = document.querySelector('.popup__profession').value;
	document.querySelector('.profile__paragraph').textContent += ' ' + nameInput + ' ' + jobInput;

};


/*Закрываем попап при клике на кнопку "сохранить"*/

SaveButton.addEventListener('click', function() {
	Popup.classList.remove('popup_opened');
	nameInput.value = '';
	jobInput.value = '';   /*очищаем окна полей ввода после закрытия попапа*/
});
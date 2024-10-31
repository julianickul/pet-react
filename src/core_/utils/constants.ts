const ESCKEYCODE: string			= 'Escape';

const formValidationSettings = {
	//formSelector: '.form',
	inputSelector: '.form__input',
	submitButtonSelector: '.form__button',
	inactiveButtonClass: 'form__button_type_disabled',
	inputErrorClass: 'form__input_type_error',
	errorClass: 'form__error_visible'
};


const openEditPopupButton		= document.querySelector('.profile__edit-button');
const openAddCardPopupButton	= document.querySelector('.profile__add-button');
const openAvatarPopupButton		= document.querySelector('.profile__avatar');
const resultError				= document.querySelector('.result-error');


export {
	ESCKEYCODE, 
	formValidationSettings,
	openEditPopupButton,
	openAddCardPopupButton,
	openAvatarPopupButton,
	resultError
};

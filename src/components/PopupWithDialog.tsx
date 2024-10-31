import React from 'react';

function PopupWithDialog({name, question}: any) {
	return (
		<div className={`popup popup_type_${name}`}>
			<div className="popup__content">
				<h2 className="popup__title">{question}</h2>
				<form action="#" className="popup__form form" name={name} noValidate>
					<div className="form__button-container">
					<button type="submit" className="form__button form__button_submit">Yes</button>
					<button type="button" className="form__button form__button_inverted form__button_cancel">No</button>
					</div>
				</form>
				<div className="button popup__close-button">Close</div>
			</div>
		</div>
	);
}

export default PopupWithDialog;

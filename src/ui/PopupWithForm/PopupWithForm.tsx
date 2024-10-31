import Button from '../Button/Button';

function PopupWithForm(props: any) {
	const {
		name, 
		title, 
		isOpen=false,
		onClose, 
		onSubmit,
		children,
	} = props;

	return (
		<div className={`popup popup_type_${name}${isOpen ? ' popup_is-opened' : ''}`}>
			<div className="popup__content">
				<h2 className="popup__title">{title}</h2>
				<form action="#" className="popup__form form" name={name} onSubmit={onSubmit} noValidate>
					{children}
					<button 
						type="submit"
						className={`form__button form__button_submit`}
					>Save</button>
					{/* <Button>Save</Button> */}
					{/* <Button variant="inverted">Save Inverted</Button> */}
					{/* <button 
						type="submit"
						className={`form__button form__button_submit ${!isSubmitEnabled ? 'form__button_type_disabled' : ''}`}
						disabled={!isSubmitEnabled}
					>Save</button> */}
				</form>
				<button className="button popup__close-button" type="button" onClick={onClose}>Close</button>
			</div>
		</div>
	);
}

export default PopupWithForm;

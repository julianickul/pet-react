import { ICard } from '../entities/card/card.interface';

function PopupWithImage({ card, onClose }: { card: ICard, onClose: any }) {
	const classList = card ? 'popup_is-opened' : '';
	return (
		<div className={`popup popup_type_view-photo ${classList}`}>
			<div className="popup__content">
				<img className="popup__image" src={card && card.link} alt={card && card.name} />
				<h2 className="popup__title">{card && card.name}</h2>
				<div className="button popup__close-button" onClick={onClose}>Close</div>
			</div>
		</div>
	);
}

export default PopupWithImage;

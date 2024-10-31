import { useState } from "react";
import './Card.css';

function Card({card, onCardClick, userId}: any) {
	const [like, setLike] = useState(false);

	function handleClick() {
		onCardClick(card);
	}
	
	function handleLike() {
    setLike(!like);
  }

	const likeButtonClasses = 'button cards__like-button' + (like ? ' cards__like-button_active' : '');
	
	return (
		<li className="cards__item">
			<img className="cards__image" src={card && card.link} alt={card && card.name} onClick={handleClick} />
			<div className="cards__info">
				<h2 className="cards__title">{card && card.name}</h2>
				<div className="cards__like">
					<button className={likeButtonClasses} type="button" aria-label="Like" onClick={handleLike}>Like</button>
					<span className="cards__like-amount">{card.likes.length}</span>
				</div>
			</div>
			{(card.owner._id === userId) &&
				<button className="button cards__delete-button" type="button" aria-label="Delete">Delete</button>
			}
		</li>
	);
}

export default Card;

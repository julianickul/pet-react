import React, { useState, useEffect, useContext } from 'react';
// import UserPopup from '../UserPopup/UserPopup';
// import { StoreContext } from '../../app/contexts/store.context';
import { StoreContext } from '../../app/contexts/store.context';
import { StoreContextType } from '../../app/contexts/store.models';
import EditAvatarPopup from '../EditAvatarPopup/EditAvatarPopup';
import api from '../../app/services/api.service';

function Profile() {
// function Profile(props: any) {
	// const {
	// 	// userData,
	// // 	userAvatar,
	// // 	userName,
	// // 	userDescription,
	// // 	onAddPlace, 
	// // 	onEditAvatar
	// } = props;



	// const {user, updateUserAvatar, updateUserData} = useContext(StoreContext) as StoreContextType;
	const { state, dispatch } = React.useContext(StoreContext)!;

	useEffect(() => {
		dispatch({ type: 'GET_USER' });
		// api.getUserInfo()
		// 	.then((userData) => {
		// 		// updateUserData(userData);
		// 		// updateUserAvatar({ avatar: userData.avatar})
		// 	})
		// 	.catch(err => {
		// 		// renderError(`Невозможно обновить данные приложения: ${err}`);
		// 	})
	}, []);
	
	const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
	const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
	
	const handleEditProfileClick = () => {
		setEditProfilePopupOpen(true);
	}
	const closeUserPopup = () => {
		setEditProfilePopupOpen(false);
	}
	
		// function handleUpdateUser(userData: any) {
		// 	api.setUserInfo(userData)
		// 		.then((res: any) => {
		// 			// setCurrentUser(res);
		// 			// setIsEditProfilePopupOpen(false);
		// 		})
		// 		.catch((err: string) => {
		// 			const errText = `Ошибка сохранения данных пользователя: ${err}`;
		// 			console.log(errText)
		// 			// handleSetError(errText)
		// 		})
		// 		.finally(() => {
		// 			//userDataPopup.renderButtonText('Save');
		// 		});
		// }

	function onEditAvatar() {
		setIsEditAvatarPopupOpen(true);
	}

	// function handleUpdateAvatar(avatar: string) {
	// 	api.updateUserAvatar(avatar)
	// 		.then(res => {
	// 			updateUserAvatar(res);
	// 			setIsEditAvatarPopupOpen(false);
	// 		})
	// 		.catch((err: string) => {
	// 			const errText = `Ошибка сохранения аватара пользователя: ${err}`;
	// 			console.log(errText)
	// 			// handleSetError(errText)
	// 		})
	// 		.finally(() => {
	// 			//updateAvatarPopup.renderButtonText('Save');
	// 		});
	// }


	return (
		<>
		`	<section className="profile">
				<div 
					className="profile__avatar" 
					style={{ backgroundImage: `url(${state.user?.avatar})` }}
					onClick={ onEditAvatar }
				></div>
				<div className="profile__info">
					<h1 className="profile__title">{ state.user?.name }</h1>
					<p className="profile__description">{ state.user?.about }</p>
					<button className="button profile__edit-button" type="button" onClick={handleEditProfileClick}>Edit Profile</button>
				</div>
				{/* <button className="button profile__add-button" type="button" onClick={ onAddPlace }>Add Place</button> */}
			</section>

			<EditAvatarPopup 
				isOpen={isEditAvatarPopupOpen} 
				onClose={() => { setIsEditAvatarPopupOpen(false) }}
			/> 

			{/* <UserPopup
				isEditUserPopupOpen={isEditProfilePopupOpen}
				closeDialog={closeUserPopup}
				// onUpdateUser={handleUpdateUser}
			/>` */}
		</>
	);
}

export default Profile;

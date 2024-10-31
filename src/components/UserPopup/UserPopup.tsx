// import { useState, useRef, useEffect, useContext } from 'react';
// import api from '../../app/services/api.service';
// import { IUserPopupProps } from '../../core_/interfaces/profileProps.interface';
// import PopupWithForm from '../PopupWithForm';
// import { UserContext } from '../../core_/contexts/UserContext';

// function UserPopup({isEditUserPopupOpen, closeDialog}: IUserPopupProps) {
	
// 	const user = useContext(UserContext);
// 	const [inputValues, setInputValues] = useState({name: '', about: ''})
// 	const name = useRef();
	
// 	// useEffect(() => {
// 	// 	// setName(user.name);
// 	// 	// setAbout(user.about);
// 	// 	console.log('u---', name, about)
// 	// }, [user]);

// 	// function handleChangeInput(event: React.ChangeEvent<HTMLInputElement>) {
// 	// 	setName[event.name]
// 	// }
// 	function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
// 		const input = event.target;
// 		//setInputValues(prevState => ({ ...prevState, [input.name]: input.value }));
// 		setInputValues({
// 			...inputValues,
// 			[input.name]: input.value 
// 		});

// 	}

//   function handleSubmit(event: React.FormEvent<HTMLFormElement>) { 
// 			event.preventDefault();
// 			console.log(inputValues);
		
// 		// e.preventDefault();
// 		// api.setUserInfo({name: user.name, about: user.about})
// 		// 	.then(res => {
// 		// 		// setCurrentUser(res);
// 		// 		closeDialog();
// 		// 	})
// 		// 	.catch((err) => {
// 		// 		const errText = `Ошибка сохранения данных пользователя: ${err}`;
// 		// 		console.log(errText)
// 		// 		// handleSetError(errText)
// 		// 	})
// 		// 	.finally(() => {
// 		// 		//userDataPopup.renderButtonText('Save');
// 		// 	});
// 	}


	
// 	return (
// 		<>
// 			<PopupWithForm 	
// 				name='edit-profile' 
// 				title='Edit profile' 
// 				isOpen={isEditUserPopupOpen}
// 				onClose={closeDialog}
// 				isSubmitEnabled={true}
//         onSubmit={handleSubmit}
// 			>
// 				<label className="form__label">
// 					<input type="text" 
// 						name="name" 
// 						id="name" 
// 						className="form__input popup__input-name" 
// 						placeholder="Name" 
// 						minLength={2}
// 						maxLength={40}
						
// 						onChange={handleInputChange}
// 						required />
// 					<span id="profile-name-error" className="form__error"></span>
// 				</label>
// 				<label className="form__label">
// 					<input type="text" 
// 						name="about" 
// 						id="about" 
// 						className="form__input popup__input-about" 
// 						placeholder="About me" 
// 						minLength={2}
// 						maxLength={200}
// 						value={inputValues.about}
// 						onChange={handleInputChange}
// 						required />
// 						<span id="profile-about-error" className="form__error"></span>
// 				</label>
// 			</PopupWithForm>
// 		</>
// 	);
// }

// export default UserPopup;
export default {}

import React, { memo, useContext, useRef } from 'react';
import PopupWithForm from '../../ui/PopupWithForm/PopupWithForm';
import { StoreContext } from '../../app/contexts/store.context';
import { StoreContextType } from '../../app/contexts/store.models';

interface IEditAvatar {
  isOpen: boolean;
  onClose: () => void;
  // onUpdateAvatar: any;
}

function EditAvatarPopup({ isOpen, onClose } : IEditAvatar) {
	// const { user, updateUserAvatar } = useContext(StoreContext) as StoreContextType;
	const { state, dispatch } = React.useContext(StoreContext)!;

	let avatarRef = useRef(state.user?.avatar || '');

  function handlerSetAvatar(e: React.FormEvent<HTMLInputElement>) {
    avatarRef.current = e.currentTarget.value;
  }


	// function handlerSetAvatar(e: React.FormEvent<HTMLInputElement>) {
	// 	updateUserAvatar({ avatar: e.currentTarget.value });
	// }
	function onSubmit(e: React.SyntheticEvent) { 
		e.preventDefault();
		console.log('set', avatarRef.current)
		// updateUserAvatar({ avatar: avatarRef.current });
		// updateUserAvatar(avatar);
	}
	
  // useEffect(() => {
	// 	if (store.user?.avatar && isOpen) setAvatar(store.user?.avatar)
  //   }, [store.user?.avatar] 
	// );
	

	return (
		<PopupWithForm 
			name='edit-avatar' 
			title='Change profile picture' 
			isOpen={isOpen}
			onClose={onClose}
			onSubmit={onSubmit}
		>
			<label className="form__label">
				<input 
					type="text" 
					className="form__input popup__input-avatar" 
					placeholder="Profile picture"
					// value={avatarRef.current}
					onChange={handlerSetAvatar}
					required
        />
				<span id="avatar-error" className="form__error"></span>
			</label>

		</PopupWithForm>
	);
}
// export default memo(EditAvatarPopup);
export default EditAvatarPopup;

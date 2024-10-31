import { useEffect, useState } from 'react';
import StoreProvider from './app/contexts/store.context';
import api from './app/services/api.service';
import { HomePage } from './pages/home/index';

import './App.css';


function App() {

	// const [userData, setUserData] = useState<IUserState>({
	// 	name: '',
	// 	about: '',
	// 	avatar: './',
	// 	_id: ''
	// });

	// const [cards, setCards] = useState([]);
	// const store = {
  //   user: userData,
  //   cards: cards,
  // }

	// useEffect(() => {
	// 	api.getAplicationData()
	// 		.then(([userData, сardsData]) => {
	// 			console.log('userData', userData)
	// 			setUserData(userData);
	// 			// setCards(сardsData);
	// 		})
	// 		.catch(err => {
	// 			// renderError(`Невозможно обновить данные приложения: ${err}`);
	// 		})
	// }, []);


	return (
		<StoreProvider>
			<HomePage />
		</StoreProvider>
	);
}

export default App;

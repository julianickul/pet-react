import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import Cards from '../../../components/Cards/Cards';
import Profile from '../../../components/Profile/Profile';



export const HomePage = () => {

  return (
    <>
        <div className="page">
				<Header/>
				<main className="content page__section">
					<Profile />
					<Cards />
				</main>
				<Footer/>
			</div>
    </>
  )
}

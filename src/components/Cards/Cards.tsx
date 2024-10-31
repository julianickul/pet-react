import { useEffect, useContext } from 'react'
import Card from '../Card/Card';
// import { StoreContext } from '../../app/contexts/store.context';


function Cards() {
  // const store = useContext(StoreContext);

  const onCardClick = () => {

  }
  return (
    <>
      <section className="cards">
        {/* <ul className="cards__list">
          {store.cards.map((card, i) => <Card key={i} card={card} onCardClick={onCardClick} userId={store.user?._id}/> )}
        </ul> */}
        <div className="loading"></div>
      </section>
    </>
  );
}
  
export default Cards;

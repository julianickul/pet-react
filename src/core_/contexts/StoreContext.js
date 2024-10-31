import React from 'react';

export const StoreContext = React.createContext();
// const teamMembersNames = [‘John’, ‘Mary’, ‘Jason’, ‘David’]

export default ({ children }) => {
  const [user, setUser] = React.useState({
    name: '',
    about: '',
    avatar: './',
    _id: '',
  });
  const [cards, setCards] = React.useState([])
  const [card, setCard] = React.useState({
    likes: '',
    _id: '',
    name: '',
    link: '',
    owner: '',
    createdAt: '',
  })
  
  const store = {
    user: [user, setUser],
    cards: [cards, setCards],
    card: [card, setCard],
  }
  
  return 
    <StoreContext.Provider value={store}>
      {children}
    </StoreContext.Provider>
}

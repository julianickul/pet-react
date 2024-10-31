import * as React from 'react';
// import { ICard } from "../../entities/card/card.interface";
import { IUserData } from "../../entities/profile/userData.interface";
import { StoreAction } from "../store/actions/store.actions";
import { storeReducer } from '../store/reducers/store.reducer';
import { IAppState, initialAppState } from '../store/state/app.state';


// import { StoreContextType } from './store.models';
// import { IUserData } from '../../entities/profile/userData.interface';

// export const StoreContext = React.createContext<StoreContextType | null>(null);

type StoreContextType = {
  state: IAppState;
  dispatch: React.Dispatch<StoreAction>;
};

export const StoreContext = React.createContext<StoreContextType | null>(null);

const StoreProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  // const [user, setUserData] = React.useState<IUserData>(
  //   {
  //     name: '',
  //     about: '',
  //     avatar: '',
  //     _id: '',
  //   }
  // );

  // const updateUserData = ({ name, about }: { name: string, about: string }) => {
  //   setUserData({
  //     ...user,
  //     name: name,
  //     about: about,
  //   })
  // }
  // const updateUserAvatar = ({ avatar }: { avatar: string }) => {
  //   setUserData({
  //     ...user,
  //     avatar: avatar,
  //   })
  // }

  const [state, dispatch] = React.useReducer(storeReducer, initialAppState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
}

export default StoreProvider;

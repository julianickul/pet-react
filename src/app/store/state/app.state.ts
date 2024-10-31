// import { ICardsState, initialCardsState } from './cards.state';
import { ICard } from '../../../entities/card/card.interface';
import { IUserData } from '../../../entities/profile/userData.interface';
import { initialUserState } from './user.state';

export interface IAppState {
  user: IUserData | null;
  cards: ICard[];
}

export const initialAppState: IAppState = {
  user: initialUserState,
  cards: [],
};

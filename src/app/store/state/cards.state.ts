import { ICard } from '../../../entities/card/card.interface';

export interface ICardsState {
  cards: ICard[];
}

export const initialCardsState: ICardsState = {
  cards: [],
};

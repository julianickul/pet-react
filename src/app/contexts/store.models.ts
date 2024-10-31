// @types.userData.ts

import { ICard } from "../../entities/card/card.interface";
import { IUserData } from "../../entities/profile/userData.interface";

export type StoreContextType = {
  user: IUserData;
  updateUserData: ({ name, about }: { name: string, about: string }) => void;
  updateUserAvatar: ({ avatar }: { avatar: string }) => void;
  cards?: ICard[];
};

import { IUserData } from "../../../entities/profile/userData.interface";

export type StoreAction =
| { type: 'GET_USER'; payload: IUserData; }
| { type: 'UPDATE_USER'; payload: IUserData; }
| { type: 'UPDATE_AVATAR'; payload: string; };

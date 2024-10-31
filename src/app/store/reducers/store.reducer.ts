import { StoreAction } from "../actions/store.actions";
import { IAppState } from "../state/app.state";

export const storeReducer = (state: IAppState, action: StoreAction): IAppState => {
  switch (action.type) {
    case 'GET_USER':
      return {
        ...state,
        user: action.payload,
        // user.about: action.payload.about,

      };

    case 'UPDATE_USER':
      return {
        ...state,
        // user.name: action.payload.name,
        // user.about: action.payload.about,

      };

    case 'UPDATE_AVATAR':
      return state;
      // return state.map((todo) =>
      //   todo.id === action.payload ? { ...todo, status: true } : todo
      // );

    default:
      return state;
  }
};

import { MouseEventHandler } from "react";

export interface IMainProps {
  onAddPlace: MouseEventHandler;
  onEditAvatar: MouseEventHandler;
  onCardClick: MouseEventHandler;
  setError: Function;
};

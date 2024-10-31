import { MouseEventHandler } from "react";

export interface IProfileProps {
  userAvatar: string;
  userName: string;
  userDescription: string;
  onAddPlace: MouseEventHandler;
  onEditAvatar: MouseEventHandler;
};

export type IUserPopupProps = {
  isEditUserPopupOpen: boolean;
  closeDialog: () => void;
}

// type Props = { 
//   onClick: (event: React.MouseEvent<HTMLElement>) => void
// };

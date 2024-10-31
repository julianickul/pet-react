import * as React from 'react';
// import { StoreContextType } from './store.models';
import { IUserData } from '../../entities/profile/userData.interface';
import { StoreContext } from '../contexts/store.context';

// const StoreProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
//   const [user, setUserData] = React.useState<IUserData>(
//     {
//       name: '',
//       about: '',
//       avatar: '',
//       _id: '',
//     }
//   );

//   const updateUserData = ({ name, about }: { name: string, about: string }) => {
//     console.log('111', user, {
//       ...user,
//       name: name,
//       about: about,
//     })
//     // setUserData({
//     //   ...user,
//     //   name: name,
//     //   about: about,
//     // })

//     setUserData({...user, name, about})
//     console.log('111222', user)
//   }
//   const updateUserAvatar = ({ avatar }: { avatar: string }) => {
//     // console.log('123',user)
//     // setUserData({
//     //   ...user,
//     //   avatar: avatar,
//     // })
//   }

//   return (
//     <StoreContext.Provider value={{ user, updateUserData, updateUserAvatar }}>
//       {children}
//     </StoreContext.Provider>
//   );
// }

// export default StoreProvider;
export {};

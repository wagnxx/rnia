import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

interface iBaseUser {
  username: string;
  id: string;
  tel: string;
  setUsername: Function;
  setId: Function;
  setTel: Function;
}

type iUserInfo = iBaseUser | null;

export const ProfileContext = createContext<iUserInfo>(null);
export const useProfileContext = () => useContext(ProfileContext);

type propsType = {
  children: ReactNode;
};

const ProfileProvider = ({children}: propsType) => {
  const [username, setUsername] = useState('');
  const [id, setId] = useState('');
  const [tel, setTel] = useState('');

  // value for consumer
  const value = {
    username,
    id,
    tel,
    setTel,
    setUsername,
    setId,
  } as iUserInfo;
  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
};

export default ProfileProvider;

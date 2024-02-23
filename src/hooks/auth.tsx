import {createContext, ReactNode, useContext, useState} from 'react';

interface IUser {
  email: string;
  password: string;
}

interface IAuthContextData {
  signed: boolean;
  user: IUser | null;
  signIn({email, password}: IUser): Promise<void>;
  Logout(): void;
}
interface IMainProps {
  children: ReactNode;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

const AuthProvider = ({children}: IMainProps) => {
  const [user, setUser] = useState<IUser | null>(null);

  async function signIn({email, password}: IUser) {
    await new Promise(resolve => setTimeout(resolve, 2000));
    setUser({
      email,
      password,
    });
  }
  function Logout() {
    setUser(null);
  }
  return (
    <AuthContext.Provider value={{signed: !!user, user, signIn, Logout}}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  return useContext(AuthContext);
}

export {AuthProvider, useAuth};

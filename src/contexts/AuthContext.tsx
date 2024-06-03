import { createContext, useCallback, useEffect, useState } from 'react';
import { User } from '../entities/User';
import { api } from '../utils/api';

interface AuthContextValue {
  signedIn: boolean;
  signin(accessToken: string): void;
  signout(): void;
  user: User | null;
}

const AuthContext = createContext<AuthContextValue>({} as AuthContextValue);

function AuthProvider({ children }: { children: React.ReactNode}) {
  const [signedIn, setSignedIn] = useState(() => {
    const storedAccessToken = localStorage.getItem('ACCESS_TOKEN');

    return !!storedAccessToken;
  });
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const accessToken = localStorage.getItem('ACCESS_TOKEN');

    if (accessToken) {
      api.get('users/me', {
        headers: {
          Authorization: accessToken
        }
      }).then(response => {
        const data = response.data;
        setUser({ id: data.id, role: data.role });
      });
    } else {
      setUser(null);
    }
  }, [signedIn]);

  const signin = useCallback((accessToken) => {
    localStorage.setItem('ACCESS_TOKEN', accessToken);

    setSignedIn(true);
  }, []);

  const signout = useCallback(() => {
    localStorage.removeItem('ACCESS_TOKEN');

    setSignedIn(false);
  }, []);

  return (
    <AuthContext.Provider value={{
      signedIn,
      signin,
      signout,
      user
    }}>
      { children }
    </AuthContext.Provider>
  );
}


export {
  AuthContext,
  AuthProvider
};

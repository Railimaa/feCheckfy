import React, { createContext, useCallback, useState } from 'react';

interface AuthContextValue {
  signedIn: boolean;
  signin: (accessToken: string) => void;
  signOut: () => void;
}

export const AuthContext = createContext({} as AuthContextValue);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [signedIn, setSignedIn] = useState<boolean>(() => {
        const storageAccessToken = localStorage.getItem('accessToken');


        return !!storageAccessToken;
    });

    const signin = useCallback((accessToken: string) => {
        localStorage.setItem('accessToken', accessToken);
        setSignedIn(true);
    }, []);

    const signOut = useCallback(() => {
        localStorage.removeItem('accessToken');
        setSignedIn(false);
    }, []);

    return (
        <AuthContext.Provider value={{ signedIn, signin, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}

import React, { createContext, useCallback, useEffect, useState } from 'react';
import { usersService } from '../services/usersService';
import { toast } from 'react-hot-toast';
import { PageLoader } from '../components/PageLoader';
import { useQuery } from '@tanstack/react-query';

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

    const { isError, isFetching, isSuccess, remove } = useQuery({
        queryKey: ['users', 'me'],
        queryFn: () => usersService.me(),
        enabled: signedIn,
        staleTime: Infinity
    });

    const signin = useCallback((accessToken: string) => {
        localStorage.setItem('accessToken', accessToken);
        setSignedIn(true);
    }, []);

    const signOut = useCallback(() => {
        localStorage.removeItem('accessToken');
        remove();

        setSignedIn(false);
    }, [remove]);

    useEffect(() => {
        if (isError) {
            toast.error('Sua sessão expirou!');
            signOut();
        }

    }, [isError, signOut]);

    return (
        <AuthContext.Provider
            value={{
                signedIn: isSuccess && signedIn,
                signin,
                signOut
            }}
        >
            <PageLoader isLoading={isFetching}/>

            {!isFetching && children}
        </AuthContext.Provider>
    );
}

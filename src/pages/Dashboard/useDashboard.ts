import { useCallback } from 'react';
import { useAuth } from '../../contexts/useAuth';

export function useDashboard() {
    const { signOut } = useAuth();

    const logout = useCallback(() => {
        signOut();
    }, [signOut]);

    return { logout };
}

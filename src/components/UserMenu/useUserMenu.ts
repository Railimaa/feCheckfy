import { useAuth } from '../../contexts/useAuth';

export function useUserMenu() {
    const { signOut, user } = useAuth();


    return { signOut, user };
}

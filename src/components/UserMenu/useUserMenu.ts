import { useAuth } from '../../contexts/useAuth';

export function useUserMenu() {
    const { signOut } = useAuth();



    return { signOut };
}

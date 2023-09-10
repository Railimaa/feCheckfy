import { useCallback } from 'react';
import { Button } from '../../components/Button';
import { Container } from './style';
import { useAuth } from '../../contexts/useAuth';

export function Home() {

    const { signOut } = useAuth();

    const logout = useCallback(() => {
        signOut();
    }, [signOut]);

    return (
        <Container>
            <h1>Dashbord</h1>
            <Button type='button'onClick={logout}>Sair</Button>
        </Container>
    );
}

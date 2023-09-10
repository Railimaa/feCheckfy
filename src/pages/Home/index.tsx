import { useCallback, useState } from 'react';
import { Button } from '../../components/Button';
import { Container } from './style';
import { delay } from '../../utils/delay';
import { useAuth } from '../../contexts/useAuth';

export function Home() {
    const [isLoading, setIsLoading] = useState(false);

    const { signOut } = useAuth();

    const logout = useCallback(async () => {
        try {
            setIsLoading(true);

            await delay(3000);

            signOut();
        } catch {
            console.log('error');
        } finally {
            setIsLoading(false);
        }
    }, []);

    return (
        <Container>
            <h1>Dashbord</h1>
            <Button type='button'isLoading={isLoading} onClick={logout}>Sair</Button>
        </Container>
    );
}

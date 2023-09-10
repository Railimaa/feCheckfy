import { Router } from '../../Router';
import { Container } from './style';
import GlobalStyles from '../../assets/styles/global';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthProvider } from '../../contexts/AuthContext';

const queryCliente = new QueryClient;

export function App() {
    return (
        <QueryClientProvider client={queryCliente}>

            <AuthProvider>
                <GlobalStyles />

                <Container>
                    <Router />
                    <Toaster />
                </Container>
            </AuthProvider>

        </QueryClientProvider>
    );
}

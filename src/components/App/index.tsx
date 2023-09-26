import { Router } from '../../Router';
import GlobalStyles from '../../assets/styles/global';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from '../../contexts/AuthContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryCliente = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
            refetchOnWindowFocus: false
        }
    }
});

export function App() {
    return (
        <QueryClientProvider client={queryCliente}>

            <AuthProvider>
                <GlobalStyles />

                <Router />
                <Toaster />
            </AuthProvider>

        </QueryClientProvider>
    );
}

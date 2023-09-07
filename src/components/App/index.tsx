import { ThemeProvider } from 'styled-components';
import { Router } from '../../Router';
import { Container } from './style';
import defaultTheme from '../../assets/styles/theme/default';
import GlobalStyles from '../../assets/styles/global';
import { Toaster } from 'react-hot-toast';

export function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyles />

            <Container>
                <Router />

                <Toaster />
            </Container>

        </ThemeProvider>
    );
}

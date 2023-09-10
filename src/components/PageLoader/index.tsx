import { Container } from './style';
import { Spinner } from '../Spinner';


export function PageLoader() {
    return (
        <Container>
            <Spinner color='#fff'/>
        </Container>
    );
}

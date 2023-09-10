import { Container } from './style';
import { Spinner } from '../Spinner';
import { Logo } from '../Logo';

interface PageLoaderProps {
  isLoading: boolean;
}

export function PageLoader({ isLoading }: PageLoaderProps) {
    if(!isLoading) {
        return null;
    }

    return (
        <Container>
            <div className="content">
                <Logo className='#fff' heigth='24px'/>
                <Spinner color='#fff'/>
            </div>
        </Container>
    );
}

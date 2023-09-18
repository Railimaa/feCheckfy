import { CrossCircledIcon } from '@radix-ui/react-icons';
import { Container } from './style';

export function FieldError({ message }: { message: string }) {
    return (
        <Container>
            <CrossCircledIcon />
            <span>{message}</span>
        </Container>
    );
}

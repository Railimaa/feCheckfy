import { Container } from './style';

interface SpinnerProps {
  color?: string;
}

export function Spinner({ color }: SpinnerProps) {
    return (
        <Container color={color}>
            <span className="loader" />
        </Container>
    );
}

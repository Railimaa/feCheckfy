import { Container } from './style';

interface SpinnerProps {
  color?: string;
  width?: number;
  height?: number;
}

export function Spinner({ color, width, height }: SpinnerProps) {
    return (
        <Container color={color} >
            <span
                className="loader"
                style={{ width: width ? `${width}px` : 24, height: height ? `${height}px` : 24  }}
            />
        </Container>
    );
}

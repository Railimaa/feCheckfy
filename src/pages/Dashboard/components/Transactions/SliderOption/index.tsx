import { useSwiper } from 'swiper/react';
import { Container } from './style';

interface SliderOptionsProps {
  month: string;
  index: number;
}

export function SliderOption({ month, index }: SliderOptionsProps) {
    const swiper = useSwiper();

    return (
        <Container>
            <button onClick={() => swiper.slideTo(index)}>
                {month}
            </button>
        </Container>
    );
}

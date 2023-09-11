import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { Container } from './style';
import { useSwiper } from 'swiper/react';

interface SliderNavigationProps {
  isBeginning: boolean;
  isEnd: boolean;
}

export function SliderNavigation({ isBeginning, isEnd }: SliderNavigationProps) {

    const swiper = useSwiper();

    return (
        <Container>
            <button onClick={() => swiper.slidePrev()} disabled={isBeginning}>
                <span>
                    <ChevronLeftIcon color='#fff'/>
                </span>
            </button>

            <button onClick={() => swiper.slideNext()} disabled={isEnd}>
                <span>
                    <ChevronRightIcon color='#fff'/>
                </span>
            </button>
        </Container>
    );
}

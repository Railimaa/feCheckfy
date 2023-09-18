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
                <ChevronLeftIcon color='#fff' width={20} height={20}/>
            </button>

            <button onClick={() => swiper.slideNext()} disabled={isEnd}>
                <ChevronRightIcon color='#fff' width={20} height={20}/>
            </button>
        </Container>
    );
}

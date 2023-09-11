import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { Container } from './style';
import { useSwiper } from 'swiper/react';

interface AccountsSliderNavigationProps {
  isBeginning: boolean;
  isEnd: boolean;
}

export function AccountsSliderNavigation({ isBeginning, isEnd }: AccountsSliderNavigationProps) {

    const swiper = useSwiper();

    return (
        <Container>
            <button onClick={() => swiper.slidePrev()} disabled={isBeginning}>
                <span>
                    <ChevronLeftIcon />
                </span>
            </button>

            <button onClick={() => swiper.slideNext()} disabled={isEnd}>
                <span>
                    <ChevronRightIcon />
                </span>
            </button>
        </Container>
    );
}

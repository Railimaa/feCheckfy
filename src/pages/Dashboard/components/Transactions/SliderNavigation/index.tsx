import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { useSwiper } from 'swiper/react';

export function SliderNavigation() {
    const swiper = useSwiper();

    return (
        <>
            <button
                style={{
                    border: 'none',
                    background: 'transparent',
                    position: 'absolute',
                    left: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '48px',
                    height: '48px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 10
                }}
                onClick={() => swiper.slidePrev()}
            >
                <ChevronLeftIcon width={24} height={24} color='#343A40'/>
            </button>

            <button
                style={{
                    border: 'none',
                    background: 'transparent',
                    position: 'absolute',
                    right: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '48px',
                    height: '48px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 10

                }}
                onClick={() => swiper.slideNext()}
            >
                <ChevronRightIcon width={24} height={24} color='#343A40'/>
            </button>
        </>
    );
}

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { EyeIcon } from '../../../../assets/icons/EyeIcon';
import { Container } from './style';
import { AccountCard } from './AccountCard';
import { useAccounts } from './useAccounts';
import { formatCurrency } from '../../../../utils/formatCurrency';
import { SliderNavigation } from './SliderNavigation';



export function Accounts() {
    const {
        sliderState,
        setSliderState,
        windowWidth,
        arValuesVisible,
        toogleValueVisibility
    }  = useAccounts();


    return (
        <Container>
            <span className='title'>Saldo total</span>

            <div className="saldo-btn">
                <strong
                    style={{ filter: arValuesVisible ? 'blur(12px)' : 'none' }}
                >
                    {formatCurrency(1000)}
                </strong>

                <button type='button' onClick={toogleValueVisibility}>
                    <EyeIcon open={arValuesVisible} />
                </button>
            </div>

            <div className="my-acc">

                <div>
                    <Swiper
                        spaceBetween={16}
                        slidesPerView={windowWidth >= 500 ? 2.1 : 1.1 }
                        onSlideChange={swiper => {
                            setSliderState({
                                isBeginning: swiper.isBeginning,
                                isEnd: swiper.isEnd,
                            });
                        }}
                    >
                        <div className='title-acc' slot='container-start'>
                            <strong>Minhas contas</strong>

                            <SliderNavigation isBeginning={sliderState.isBeginning} isEnd={sliderState.isEnd}/>
                        </div>

                        <SwiperSlide>
                            <AccountCard
                                color='#7950F2'
                                name='Nubank'
                                balance={1000.2}
                                type='CHECKING'
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <AccountCard
                                color='#333'
                                name='XP'
                                balance={10000}
                                type='INVESTMENT'
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <AccountCard
                                color='#0f0'
                                name='Carteira'
                                balance={75.90}
                                type='CASH'
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>

            </div>

        </Container>
    );
}

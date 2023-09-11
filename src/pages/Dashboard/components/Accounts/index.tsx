import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { EyeIcon } from '../../../../assets/icons/EyeIcon';
import { Container } from './style';
import { AccountCard } from './AccountCard';
import { AccountsSliderNavigation } from './AccountsSliderNavigation';
import { useAccounts } from './useAccounts';
import { formatCurrency } from '../../../../utils/formatCurrency';

export function Accounts() {
    const { sliderState, setSliderState, windowWidth } = useAccounts();

    return (
        <Container>
            <span className='title'>Saldo total</span>

            <div className="saldo-btn">
                <strong>{formatCurrency(1000)}</strong>
                <button type='button'>
                    <EyeIcon open />
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

                            <AccountsSliderNavigation isBeginning={sliderState.isBeginning} isEnd={sliderState.isEnd}/>
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
                                type='CHECKING'
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>

            </div>

        </Container>
    );
}

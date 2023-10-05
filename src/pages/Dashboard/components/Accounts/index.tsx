import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { EyeIcon } from '../../../../assets/icons/EyeIcon';
import { Container } from './style';
import { AccountCard } from './AccountCard';
import { useAccounts } from './useAccounts';
import { formatCurrency } from '../../../../utils/formatCurrency';
import { SliderNavigation } from './SliderNavigation';
import { Spinner } from '../../../../components/Spinner';
import { PlusIcon } from '@radix-ui/react-icons';


export function Accounts() {
    const {
        sliderState,
        setSliderState,
        windowWidth,
        arValuesVisible,
        toogleValueVisibility,
        isLoading,
        accounts,
        openNewAccountModal,
        currentBalance,
    }  = useAccounts();

    const hasAccounts = accounts.length > 0;

    return (
        <Container>
            {isLoading && (
                <div className="loading">
                    <Spinner color='#fff' width={36} height={36}/>
                </div>
            )}

            {!isLoading && (
                <>
                    <span className='title'>Saldo total</span>

                    <div className="saldo-btn">
                        <strong
                            style={{ filter: arValuesVisible ? 'blur(12px)' : 'none' }}
                        >
                            {formatCurrency(currentBalance)}
                        </strong>

                        <button type='button' onClick={toogleValueVisibility}>
                            <EyeIcon open={arValuesVisible} />
                        </button>
                    </div>

                    <div className="my-acc">
                        {!hasAccounts && (
                            <>
                                <div className='title-acc-0'>
                                    <strong>Minhas contas</strong>
                                </div>

                                <div className='btn-title-acc-0'>
                                    <button onClick={openNewAccountModal}>
                                        <div className="icon"> <PlusIcon width={24} height={24}/> </div>
                                        <span>Cadastre uma nova conta</span>
                                    </button>
                                </div>
                            </>
                        )}


                        {hasAccounts && (
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

                                        <SliderNavigation
                                            isBeginning={sliderState.isBeginning}
                                            isEnd={sliderState.isEnd}
                                        />
                                    </div>

                                    {accounts.map((account) => (
                                        <SwiperSlide key={account.id} >
                                            <AccountCard account={account}/>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        )}


                    </div>
                </>
            )}
        </Container>
    );
}

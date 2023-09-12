import { ChevronDownIcon } from '@radix-ui/react-icons';
import { TransactionsIcon } from '../../../../assets/icons/TransactionsIcon';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MONTHS } from '../../../../utils/contants';
import { FilterIcon } from '../../../../assets/icons/FilterIcon';
import { Container, Content, Header } from './style';
import { SliderOption } from './SliderOption';
import { SliderNavigation } from './SliderNavigation';

export function Transactions() {
    return (
        <Container>
            <Header>
                <button className='btn-transactions'>
                    <TransactionsIcon />
                    <span>Transações</span>
                    <ChevronDownIcon color='#212529' />
                </button>

                <button className='btn-filter'>
                    <FilterIcon />
                </button>
            </Header>

            <div className="slider-mounth">
                <Swiper
                    slidesPerView={3}
                    centeredSlides
                >
                    <SliderNavigation />
                    {MONTHS.map((month, index) => (
                        <SwiperSlide key={month}>
                            <SliderOption month={month} index={index}/>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>

            <Content>
              COnteudo
            </Content>
        </Container>
    );
}

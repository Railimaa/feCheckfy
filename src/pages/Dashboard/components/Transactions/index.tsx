import { ChevronDownIcon } from '@radix-ui/react-icons';
import { TransactionsIcon } from '../../../../assets/icons/TransactionsIcon';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MONTHS } from '../../../../utils/contants';
import { FilterIcon } from '../../../../assets/icons/FilterIcon';
import { Card, Container, Content, Header } from './style';
import { SliderOption } from './SliderOption';
import { SliderNavigation } from './SliderNavigation';
import { formatCurrency } from '../../../../utils/formatCurrency';
import { CategoryIcon } from '../../../../assets/icons/categories/CategoryIcon';
import { useTransaction } from './useTransaction';

export function Transactions() {
    const { arValuesVisible } = useTransaction();

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
                <Card>
                    <div className="content-transaction">
                        <CategoryIcon type='expense'/>

                        <div className="title-and-date">
                            <strong>Almoço</strong>
                            <span>12/03/2023</span>
                        </div>
                    </div>
                    <span
                        style={{ filter: arValuesVisible ? 'blur(12px)' : 'none' }}
                    >
                      - {formatCurrency(123)}
                    </span>
                </Card>

                <Card>
                    <div className="content-transaction">
                        <CategoryIcon type='income'/>

                        <div className="title-and-date">
                            <strong>Trabalho</strong>
                            <span>12/04/2023</span>
                        </div>
                    </div>
                    <span>{formatCurrency(123)}</span>
                </Card>
            </Content>

        </Container>
    );
}

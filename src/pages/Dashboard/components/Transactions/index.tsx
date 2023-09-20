import { Swiper, SwiperSlide } from 'swiper/react';
import { MONTHS } from '../../../../utils/constants';
import { FilterIcon } from '../../../../assets/icons/FilterIcon';
import { Card, Container, Content, Header } from './style';
import { SliderOption } from './SliderOption';
import { SliderNavigation } from './SliderNavigation';
import { formatCurrency } from '../../../../utils/formatCurrency';
import { CategoryIcon } from '../../../../assets/icons/categories/CategoryIcon';
import { useTransaction } from './useTransaction';
import { Spinner } from '../../../../components/Spinner';
import emptyState from '../../../../assets/images/empty-state.svg';
import { TransactionTypeDropdown } from './TransactionTypeDropdown';
import { FiltersModal } from './FiltersModal';

export function Transactions() {
    const {
        arValuesVisible,
        transactions,
        isInitialLoading,
        isLoading,
        isFilterModalOpen,
        handleOpenFiltersModal,
        handleCloseFiltersModal
    } = useTransaction();

    const hasTransaction = transactions.length > 0;

    return (
        <Container>
            {isInitialLoading && (
                <div className="loading">
                    <Spinner width={36} height={36}/>
                </div>
            )}

            {!isInitialLoading && (
                <>
                    <FiltersModal
                        open={isFilterModalOpen}
                        onClose={handleCloseFiltersModal}
                    />

                    <Header>
                        <TransactionTypeDropdown />

                        <button className='btn-filter' onClick={handleOpenFiltersModal}>
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
                        {isLoading && (
                            <div className="empty-transactions">
                                <Spinner width={24} height={24}/>
                            </div>
                        )}

                        {(!hasTransaction && !isLoading)  && (
                            <div className="empty-transactions">
                                <img src={emptyState} alt="EmptyState" />
                                <span>Não encontramos nenhuma transação!</span>
                            </div>
                        )}


                        {(hasTransaction && !isLoading) && (
                            <>
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
                            </>
                        )}
                    </Content>

                </>
            )}
        </Container>
    );
}

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
import { formatDate } from '../../../../utils/formatDate';
import { EditTransactionModal } from '../../modals/EditTransactionModal';

export function Transactions() {
    const {
        arValuesVisible,
        transactions,
        isInitialLoading,
        isLoading,
        isFilterModalOpen,
        handleOpenFiltersModal,
        handleCloseFiltersModal,
        filters,
        handleChangeFilters,
        handleApplyFilters
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
                        onApplyFilters={handleApplyFilters}
                    />

                    <Header>
                        <TransactionTypeDropdown
                            onSelect={handleChangeFilters('type')}
                            selectedType={filters.type}
                        />

                        <button className='btn-filter' onClick={handleOpenFiltersModal}>
                            <FilterIcon />
                        </button>
                    </Header>

                    <div className="slider-mounth">
                        <Swiper
                            slidesPerView={3}
                            centeredSlides
                            initialSlide={filters.month}
                            onSlideChange={swiper => {
                                handleChangeFilters('month')(swiper.realIndex);
                            }}
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
                                <EditTransactionModal
                                    open
                                    onClose={() => console.log('Fechou')}
                                    transactionType='INCOME'
                                />

                                {transactions.map((transaction) => (
                                    <Card key={transaction.id}>
                                        <div className="content-transaction">
                                            <CategoryIcon
                                                type={transaction.type === 'EXPENSE' ? 'expense' : 'income'}
                                                category={transaction.category?.icon}
                                            />

                                            <div className="title-and-date">
                                                <strong>{transaction.name}</strong>
                                                <span>{formatDate(new Date(transaction.date))}</span>
                                            </div>
                                        </div>

                                        {transaction.type === 'EXPENSE' && (
                                            <span id='expense'
                                                style={{ filter: arValuesVisible ? 'blur(12px)' : 'none' }}
                                            >
                                          -{formatCurrency(transaction.value)}
                                            </span>
                                        )}

                                        {transaction.type === 'INCOME' && (
                                            <span id='income'
                                                style={{ filter: arValuesVisible ? 'blur(12px)' : 'none' }}
                                            >
                                          +{formatCurrency(transaction.value)}
                                            </span>
                                        )}
                                    </Card>
                                ))}
                            </>
                        )}
                    </Content>

                </>
            )}
        </Container>
    );
}

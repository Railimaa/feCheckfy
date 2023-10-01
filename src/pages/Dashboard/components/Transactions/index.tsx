import { Swiper, SwiperSlide } from 'swiper/react';
import { MONTHS } from '../../../../utils/constants';
import { FilterIcon } from '../../../../assets/icons/FilterIcon';
import { Container, Content, Header } from './style';
import { SliderOption } from './SliderOption';
import { SliderNavigation } from './SliderNavigation';
import { useTransaction } from './useTransaction';
import { Spinner } from '../../../../components/Spinner';
import emptyState from '../../../../assets/images/empty-state.svg';
import { TransactionTypeDropdown } from './TransactionTypeDropdown';
import { FiltersModal } from './FiltersModal';
import { EditTransactionModal } from '../../modals/EditTransactionModal';
import { Card } from './Card';

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
        handleApplyFilters,
        handleOpenEditModal,
        handleCloseEditModal,
        isEditModalOpen,
        transactionBeingEdited
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
                                {transactionBeingEdited && (
                                    <EditTransactionModal
                                        open={isEditModalOpen}
                                        onClose={handleCloseEditModal}
                                        transaction={transactionBeingEdited}
                                        onCloseAll={handleCloseEditModal}
                                    />
                                )}

                                {transactions.map((transaction) => (
                                    <Card
                                        key={transaction.id}
                                        transaction={transaction}
                                        arValuesVisible={arValuesVisible}
                                        handleOpenEditModal={handleOpenEditModal}
                                    />
                                ))}
                            </>
                        )}
                    </Content>

                </>
            )}
        </Container>
    );
}

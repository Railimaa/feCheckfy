import {  useEffect, useState } from 'react';
import { useDashboardContext } from '../DashboardContext/useDashboardContext';
import { useTransactions } from '../../../../hooks/useTransactions';
import { TransactionsFilter } from '../../../../services/transactionsService/getAll';
import { Transaction } from '../../../../types/Transaction';

export function useTransaction() {
    const { arValuesVisible } = useDashboardContext();
    const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [transactionBeingEdited, setTransactionBeingEdited] = useState<null | Transaction>(null);

    const [filters, setFilters] = useState<TransactionsFilter>({
        month: new Date().getMonth(),
        year: new Date().getFullYear()
    });

    const { transactions, isLoading, isInitialLoading, refetchTransactions } = useTransactions(filters);

    useEffect(() => {
        refetchTransactions();
    }, [filters, refetchTransactions]);


    function handleChangeFilters<TFilter extends keyof TransactionsFilter>(filter: TFilter) {
        return (value: TransactionsFilter[TFilter]) => {
            if (value === filters[filter]) return;

            setFilters(prevState => ({
                ...prevState,
                [filter]: value,
            }));
        };
    }

    function handleApplyFilters({
        bankAccountId,
        year
    }: { bankAccountId: string | undefined, year: number}) {
        handleChangeFilters('bankAccountId')(bankAccountId);
        handleChangeFilters('year')(year);
        handleCloseFiltersModal();
    }

    function handleOpenFiltersModal() {
        setIsFilterModalOpen(true);
    }

    function handleCloseFiltersModal() {
        setIsFilterModalOpen(false);
    }

    function handleOpenEditModal(transaction: Transaction) {
        setTransactionBeingEdited(transaction);
        setIsEditModalOpen(true);
    }

    function handleCloseEditModal() {
        setIsEditModalOpen(false);
        setTransactionBeingEdited(null);
    }


    return {
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
        isEditModalOpen,
        handleOpenEditModal,
        handleCloseEditModal,
        transactionBeingEdited
    };
}

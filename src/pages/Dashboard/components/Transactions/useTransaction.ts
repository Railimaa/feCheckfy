import {  useEffect, useState } from 'react';
import { useDashboardContext } from '../DashboardContext/useDashboardContext';
import { useTransactions } from '../../../../hooks/useTransactions';
import { TransactionsFilter } from '../../../../services/transactionsService/getAll';

export function useTransaction() {
    const { arValuesVisible } = useDashboardContext();

    const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
    const [filters, setFilters] = useState<TransactionsFilter>({
        month: new Date().getMonth(),
        year: new Date().getFullYear()
    });

    const { transactions, isLoading, isInitialLoading, refetchTransactions } = useTransactions(filters);

    useEffect(() => {
        refetchTransactions();
    }, [filters, refetchTransactions]);


    function handleChangeMounth(month: number) {
        setFilters(prevState => {
            return {
                ...prevState,
                month
            };
        });
    }

    function handleOpenFiltersModal() {
        setIsFilterModalOpen(true);
    }

    function handleCloseFiltersModal() {
        setIsFilterModalOpen(false);
    }


    return {
        arValuesVisible,
        transactions,
        isInitialLoading,
        isLoading,
        isFilterModalOpen,
        handleOpenFiltersModal,
        handleCloseFiltersModal,
        handleChangeMounth,
        filters
    };
}

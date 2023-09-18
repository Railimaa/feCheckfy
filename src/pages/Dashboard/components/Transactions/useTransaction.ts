import {  useState } from 'react';
import { useDashboardContext } from '../DashboardContext/useDashboardContext';

export function useTransaction() {
    const { arValuesVisible } = useDashboardContext();

    const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

    function handleOpenFiltersModal() {
        setIsFilterModalOpen(true);
    }

    function handleCloseFiltersModal() {
        setIsFilterModalOpen(false);
    }


    return {
        arValuesVisible,
        transactions: [0],
        isInitialLoading: false,
        isLoading: false,
        isFilterModalOpen,
        handleOpenFiltersModal,
        handleCloseFiltersModal
    };
}

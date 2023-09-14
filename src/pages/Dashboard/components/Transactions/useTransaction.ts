import { useDashboardContext } from '../DashboardContext/useDashboardContext';

export function useTransaction() {
    const { arValuesVisible } = useDashboardContext();


    return {
        arValuesVisible,
        transactions: [0],
        isInitialLoading: false,
        isLoading: false
    };
}

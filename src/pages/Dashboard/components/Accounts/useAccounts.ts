import { useMemo, useState } from 'react';
import { useWindowWidth } from '../../../../hooks/useWindowWidth';
import { useDashboardContext } from '../DashboardContext/useDashboardContext';
import { useQuery } from 'react-query';
import { bankAccountService } from '../../../../services/bankAccountService';


export function useAccounts() {
    const windowWidth = useWindowWidth();
    const {
        arValuesVisible,
        toogleValueVisibility,
        openNewAccountModal,
    } = useDashboardContext();

    const [sliderState, setSliderState] = useState({
        isBeginning: true,
        isEnd: false,
    });

    const { data = [], isFetching } = useQuery({
        queryKey: ['bankAccounts'],
        queryFn: bankAccountService.getAll,
    });

    const currentBalance = useMemo(() => {
        if (!data) return 0;

        return data.reduce((total, accounts) => total + accounts.currentBalance, 0);
    }, [data]);

    return {
        sliderState,
        setSliderState,
        windowWidth,
        arValuesVisible,
        toogleValueVisibility,
        isLoading: isFetching,
        accounts: data,
        openNewAccountModal,
        currentBalance,
    };
}

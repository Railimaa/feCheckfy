import { useMemo, useState } from 'react';
import { useBankAccounts } from '../../../../hooks/useBankAccountss';
import { useWindowWidth } from '../../../../hooks/useWindowWidth';
import { useDashboardContext } from '../DashboardContext/useDashboardContext';


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

    const { accounts, isFetching } = useBankAccounts();

    const currentBalance = useMemo(() => {
        if (!accounts) return 0;

        return accounts.reduce((total, accounts) => total + accounts.currentBalance, 0);
    }, [accounts]);

    return {
        sliderState,
        setSliderState,
        windowWidth,
        arValuesVisible,
        toogleValueVisibility,
        isLoading: isFetching,
        accounts,
        openNewAccountModal,
        currentBalance,
    };
}

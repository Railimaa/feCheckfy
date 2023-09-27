import { useState } from 'react';
import { useBankAccounts } from '../../../../../hooks/useBankAccountss';

export function useFiltersModal() {
    const { accounts } = useBankAccounts();
    const [selectedBankAccountId, setSelectedBankAccountId] = useState<undefined | string>(undefined);
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

    function handleSelectBankAccountId(bankAccountId: string) {
        setSelectedBankAccountId(prevState => prevState === bankAccountId ? undefined : bankAccountId);
    }

    function handleChangeYear(step: number) {
        setSelectedYear(prevState => prevState + step);
    }

    return {
        selectedBankAccountId,
        handleSelectBankAccountId,
        selectedYear,
        handleChangeYear,
        accounts
    };
}

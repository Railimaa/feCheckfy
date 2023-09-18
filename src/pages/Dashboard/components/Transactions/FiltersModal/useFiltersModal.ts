import { useState } from 'react';

export function useFiltersModal() {
    const [selectedBankAccountId, setSelectedBankAccountId] = useState<null | string>(null);

    function handleSelectBankAccountId(bankAccountId: string) {
        setSelectedBankAccountId(bankAccountId);
    }

    return { selectedBankAccountId, handleSelectBankAccountId };
}

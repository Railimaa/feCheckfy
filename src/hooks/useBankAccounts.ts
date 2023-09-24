import { useQuery } from 'react-query';
import { bankAccountService } from '../services/bankAccountService';

export function useBankAccounts() {
    const { data, isFetching } = useQuery({
        queryKey: ['bankAccounts'],
        queryFn: bankAccountService.getAll,
    });

    return { accounts: data ?? [], isFetching };
}

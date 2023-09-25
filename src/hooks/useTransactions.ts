import { useQuery } from 'react-query';
import { transactionsService } from '../services/transactionsService';

export function useTransactions() {
    const { data } = useQuery({
        queryKey: ['transactions'],
        queryFn: () => transactionsService.getAll({
            month: 8,
            year: 2023
        }),
    });

    return { transactions: data ?? [] };
}

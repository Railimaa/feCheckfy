
import { useQuery } from '@tanstack/react-query';
import { transactionsService } from '../services/transactionsService';
import { TransactionsFilter } from '../services/transactionsService/getAll';

export function useTransactions(filters: TransactionsFilter) {
    const { data, isFetching, isInitialLoading, refetch } = useQuery({
        queryKey: ['transactions'],
        queryFn: () => transactionsService.getAll(filters),
    });

    return {
        transactions: data ?? [],
        isLoading: isFetching,
        isInitialLoading,
        refetchTransactions: refetch
    };
}

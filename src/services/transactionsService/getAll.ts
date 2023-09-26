import { Transaction } from '../../types/Transaction';
import { httpClient } from '../httpClient';


type TransactionsResponse = Array<Transaction>;

export type TransactionsFilter = {
  month: number;
  year: number;
  bankAccountId?: string;
  type?: Transaction['type']
}


export async function getAll(filters: TransactionsFilter) {
    const { data } = await httpClient.get<TransactionsResponse>('/transactions', {
        params: filters
    });

    return (data);
}


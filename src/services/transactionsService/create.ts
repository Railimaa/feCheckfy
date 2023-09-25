import { httpClient } from '../httpClient';


interface CreateTransactionBody {
  bankAccountId: string;
  categoryId: string;
  name: string;
  value: number;
  date: string;
  type: 'INCOME' | 'EXPENSE';
}

export async function create(body: CreateTransactionBody) {

    const { data } = await httpClient.post('/transactions', body);

    return (data);
}


import { httpClient } from '../httpClient';


interface UpdateTransactionBody {
  id: string;
  bankAccountId: string;
  categoryId: string;
  name: string;
  value: number;
  date: string;
  type: 'INCOME' | 'EXPENSE';
}

export async function update({id, ...body}: UpdateTransactionBody) {

    const { data } = await httpClient.put(`/transactions/${id}`, body);

    return (data);
}


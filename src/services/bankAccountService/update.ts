import { httpClient } from '../httpClient';


interface UpdateBankAccountBody {
  id: string;
  name: string;
  initialBalance: number;
  color: string;
  type: 'CHECKING' | 'INVESTMENT' | 'CASH'
}

export async function update({id, ...body}: UpdateBankAccountBody) {
    const { data } = await httpClient.put(`/bank-accounts/${id}`, body);

    return (data);
}


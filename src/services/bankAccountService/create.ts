import { httpClient } from '../httpClient';


interface CreateBankAccountBody {
  name: string;
  initialBalance: number;
  color: string;
  type: 'CHECKING' | 'INVESTMENT' | 'CASH'
}

export async function create(body: CreateBankAccountBody) {

    const { data } = await httpClient.post('/bank-accounts', body);

    return (data);
}


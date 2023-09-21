import { httpClient } from '../httpClient';


interface BankAccountBody {
  name: string;
  initialBalance: number;
  color: string;
  type: 'CHECKING' | 'INVESTMENT' | 'CASH'
}

export async function create(body: BankAccountBody) {

    const { data } = await httpClient.post('/bank-accounts', body);

    return (data);
}


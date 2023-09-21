import { httpClient } from '../httpClient';


type BankAccountsResponse = {
  id: string;
  name: string;
  initialBalance: number;
  color: string;
  type: 'CHECKING' | 'INVESTMENT' | 'CASH';
  currentBalance: number;
}[];


export async function getAll() {
    const { data } = await httpClient.get<BankAccountsResponse>('/bank-accounts');

    return (data);
}


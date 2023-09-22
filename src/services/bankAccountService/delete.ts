import { httpClient } from '../httpClient';


export async function deleted(id: string) {
    await httpClient.delete(`/bank-accounts/${id}`);
}

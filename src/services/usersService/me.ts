import { delay } from '../../utils/delay';
import { httpClient } from '../httpClient';


interface MeResponse {
  name: string;
  email: string;
}

export async function me() {
    await delay(1000);

    const { data } = await httpClient.get<MeResponse>('/users/me');

    return (data);
}


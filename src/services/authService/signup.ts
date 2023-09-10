import { delay } from '../../utils/delay';
import { httpClient } from '../httpClient';


interface SignupBody {
  name: string,
  email: string,
  password: string
}

interface SignupResponse {
  accessToken: string;
}

export async function signup(body: SignupBody) {
    await delay(1000);

    const { data } = await httpClient.post<SignupResponse>('/auth/signup', body);

    return (data);
}


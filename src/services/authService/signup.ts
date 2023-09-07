import { delay } from '../../utils/delay';
import { httpClient } from '../httpClient';


interface SignupParams {
  name: string,
  email: string,
  password: string
}

interface SignupResponse {
  accessToken: string;
}

export async function signup(body: SignupParams) {
    await delay(1000);

    const { data } = await httpClient.post<SignupResponse>('/auth/signup', body);

    return (data);
}


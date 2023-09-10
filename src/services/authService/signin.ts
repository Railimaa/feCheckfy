import { delay } from '../../utils/delay';
import { httpClient } from '../httpClient';


interface SigninBody {
  email: string,
  password: string
}

interface SigninResponse {
  accessToken: string;
}

export async function signin(body: SigninBody) {
    await delay(1000);

    const { data } = await httpClient.post<SigninResponse>('/auth/signin', body);

    return (data);
}


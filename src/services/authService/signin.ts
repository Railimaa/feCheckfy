import { httpClient } from '../httpClient';


interface SigninBody {
  email: string,
  password: string
}

interface SigninResponse {
  accessToken: string;
}

export async function signin(body: SigninBody) {

    const { data } = await httpClient.post<SigninResponse>('/auth/signin', body);

    return (data);
}


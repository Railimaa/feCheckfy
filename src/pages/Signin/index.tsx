import { Container } from './style';
import { Input } from '../../components/Input/input';
import { Button } from '../../components/Button';
import { FormPagesPrincipal } from '../../components/FormPagesPrincipal';
import { useSignin } from './useSignin';

export function Signin() {
    const { handleSubmit, register, errors, isLoading } = useSignin();

    return (
        <Container>

            <FormPagesPrincipal
                title='Entre em sua conta'
                subTitle='Novo por aqui?'
                path='/register'
                textPath='Crie uma conta'
                OnSubmit={handleSubmit}
            >

                <Input
                    type="email"
                    placeholder='E-mail'
                    error={errors.email?.message}
                    {...register('email')}
                />

                <Input
                    type="password"
                    placeholder='Senha'
                    error={errors.password?.message}
                    {...register('password')}
                />


                <Button type='submit' isLoading={isLoading}>Entrar</Button>

            </FormPagesPrincipal>


        </Container>
    );
}

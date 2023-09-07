import { Button } from '../../components/Button';
import { FormPagesPrincipal } from '../../components/FormPagesPrincipal';
import { Input } from '../../components/Input/input';
import { useSignup } from './useSignup';


export function Signup() {
    const { handleSubmit, register, errors, isLoading } = useSignup();

    return (
        <FormPagesPrincipal
            title="Crie sua conta"
            subTitle='Já possui uma conta?'
            path='/login'
            textPath='Fazer login'
            OnSubmit={handleSubmit}
        >

            <Input
                type="text"
                placeholder="Nome"
                error={errors.name?.message}
                {...register('name')}
            />

            <Input
                type='email'
                placeholder='E-mail'
                error={errors.email?.message}
                {...register('email')}
            />

            <Input
                type='password'
                placeholder='Senha'
                error={errors.password?.message}
                {...register('password')}
            />

            <Button type='submit' isLoading={isLoading}>Criar conta</Button>

        </FormPagesPrincipal>
    );
}

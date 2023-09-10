import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { authService } from '../../services/authService';
import { useAuth } from '../../contexts/useAuth';

const schema = z.object({
    email: z.string().nonempty('E-mail è obrigatório.').email('Informe um email válido'),
    password: z.string().nonempty('Senha é obrigatória').min(8, 'Senha deve conter pelo menos 8 digitos'),
});

type FormData = {
  email: string,
  password: string
}

export function useSignin() {
    const [isLoading, setIsLoading] = useState(false);

    const { handleSubmit: hookFormHandleSubmit, register, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(schema)
    });

    const { signin } = useAuth();

    const handleSubmit = hookFormHandleSubmit(async (data) => {
        try {
            setIsLoading(true);

            const { accessToken } = await authService.signin(data);

            signin(accessToken);
        } catch {
            toast.error('Credencíais Inválidas!');
        } finally {
            setIsLoading(false);
        }
    });


    return { handleSubmit, register, errors, isLoading };
}

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { authService } from '../../services/authService';
import { toast } from 'react-hot-toast';
import { useState } from 'react';

const schema = z.object({
    name: z.string().nonempty('Nome é obrigatório'),
    email: z.string().nonempty('E-mail è obrigatório.').email('Informe um e-mail válido'),
    password: z.string().nonempty('Senha é obrigatória').min(8, 'Senha deve conter pelo menos 8 digitos'),
});

type FormData = z.infer<typeof schema>

export function useSignup() {
    const [isLoading, setIsLoading] = useState(false);


    const {
        handleSubmit: hookFormSubmit,
        register,
        formState: { errors }} = useForm<FormData>({
            resolver: zodResolver(schema)
        });

    const handleSubmit = hookFormSubmit(async (data) => {
        try {
            setIsLoading(true);

            const { accessToken } = await authService.signup(data);

            toast.success('Conta criada com sucesso!');

            console.log(accessToken);
        } catch {
            toast.error('Erro ao criar a conta');
        } finally {
            setIsLoading(false);
        }
    });

    return { handleSubmit, register, errors, isLoading };
}

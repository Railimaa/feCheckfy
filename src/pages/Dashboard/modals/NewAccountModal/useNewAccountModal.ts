import { z } from 'zod';
import { useDashboardContext } from '../../components/DashboardContext/useDashboardContext';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { bankAccountService } from '../../../../services/bankAccountService';
import { currencyStringToNumber } from '../../../../utils/currencyStringToNumber';
import toast from 'react-hot-toast';
import { useQueryClient } from 'react-query';

const schema = z.object({
    name: z.string().nonempty('Nome da conta é obrigatório.'),
    initialBalance: z.string().nonempty('Saldo inicial é obrigatório.'),
    color: z.string().nonempty('Cor é obrigatório.'),
    type: z.enum(['CHECKING',  'INVESTMENT',  'CASH']),
});

type FormData = z.infer<typeof schema>

export function useNewAccountModal() {
    const { isNewAccountModalOpen, closeNewAccountModal } = useDashboardContext();
    const [isLoadingButton, setIsLoadingButton] = useState(false);

    const {
        handleSubmit: hookFormHandleSubmit,
        register,
        formState: { errors },
        control,
        reset
    } = useForm<FormData>({
        resolver: zodResolver(schema),

    });


    const queryClient = useQueryClient();
    const handleSubmit = hookFormHandleSubmit(async (data) => {
        try {
            setIsLoadingButton(true);

            await bankAccountService.create({
                ...data,
                initialBalance: currencyStringToNumber(data.initialBalance)
            });

            queryClient.invalidateQueries({ queryKey: 'bankAccounts' });
            toast.success('Conta cadastrada com sucesso!');
            closeNewAccountModal();
            reset();
        } catch {
            toast.error('Erro ao cadastrar a conta!');
        } finally {
            setIsLoadingButton(false);
        }
    });

    return {
        isNewAccountModalOpen,
        closeNewAccountModal,
        handleSubmit,
        register,
        errors,
        control,
        isLoadingButton
    };
}

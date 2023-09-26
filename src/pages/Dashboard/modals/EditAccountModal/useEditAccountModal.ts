import { z } from 'zod';
import { useDashboardContext } from '../../components/DashboardContext/useDashboardContext';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {  useState } from 'react';
import { bankAccountService } from '../../../../services/bankAccountService';
import { currencyStringToNumber } from '../../../../utils/currencyStringToNumber';
import toast from 'react-hot-toast';
import { useQueryClient } from '@tanstack/react-query';

const schema = z.object({
    name: z.string().nonempty('Nome da conta é obrigatório.'),
    initialBalance: z.union([
        z.string().nonempty('Saldo inicial é obrigatório.'),
        z.number()
    ]),
    color: z.string().nonempty('Cor é obrigatório.'),
    type: z.enum(['CHECKING',  'INVESTMENT',  'CASH']),
});

type FormData = z.infer<typeof schema>

export function useEditAccountModal() {
    const {
        isEditAccountModalOpen,
        closeEditAccountModal,
        isAccountSelectedEdit
    } = useDashboardContext();

    const [isLoadingButton, setIsLoadingButton] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalVisible] = useState(false);

    function handleCloseDeleteModal() {
        setIsDeleteModalVisible(false);
    }

    function handleOpenDeleteModal()  {
        setIsDeleteModalVisible(true);
    }

    async function handleDeleteAccount() {
        try {
            setIsLoadingButton(true);

            await bankAccountService.deleted(isAccountSelectedEdit!.id);
            queryClient.invalidateQueries({ queryKey: ['bankAccounts'] });
            queryClient.invalidateQueries({ queryKey: ['transactions'] });
            toast.success('Conta deletada com sucesso!');
            closeEditAccountModal();
        } catch {
            toast.error('Erro ao deletar a conta!');
        } finally {
            setIsLoadingButton(false);
        }
    }

    const {
        handleSubmit: hookFormHandleSubmit,
        register,
        formState: { errors },
        control,
    } = useForm<FormData>({
        resolver: zodResolver(schema),
        defaultValues: {
            name: isAccountSelectedEdit?.name,
            initialBalance: isAccountSelectedEdit?.initialBalance,
            color: isAccountSelectedEdit?.color,
            type: isAccountSelectedEdit?.type
        }
    });

    const queryClient = useQueryClient();
    const handleSubmit = hookFormHandleSubmit(async (data) => {
        try {
            setIsLoadingButton(true);

            await bankAccountService.update({
                ...data,
                initialBalance: currencyStringToNumber(data.initialBalance),
                id: isAccountSelectedEdit!.id
            });

            queryClient.invalidateQueries({ queryKey: ['bankAccounts'] });
            toast.success('Conta editada com sucesso!');
            closeEditAccountModal();
        } catch {
            toast.error('Erro ao editar a conta!');
        } finally {
            setIsLoadingButton(false);
        }
    });

    return {
        isEditAccountModalOpen,
        closeEditAccountModal,
        handleSubmit,
        register,
        errors,
        control,
        isLoadingButton,
        isAccountSelectedEdit,
        handleOpenDeleteModal,
        handleCloseDeleteModal,
        isDeleteModalOpen,
        handleDeleteAccount
    };
}

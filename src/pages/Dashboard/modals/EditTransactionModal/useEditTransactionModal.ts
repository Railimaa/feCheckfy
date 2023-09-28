import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useBankAccounts } from '../../../../hooks/useBankAccountss';
import { useCategories } from '../../../../hooks/useCategories';
import { z } from 'zod';
import { Transaction } from '../../../../types/Transaction';
import { transactionsService } from '../../../../services/transactionsService';
import { currencyStringToNumber } from '../../../../utils/currencyStringToNumber';
import toast from 'react-hot-toast';
import { useQueryClient } from '@tanstack/react-query';


const schema = z.object({
    value: z.union([
        z.string().nonempty('Informe um valor.'),
        z.number()
    ]),
    name: z.string().nonempty('Infome o nome'),
    categoryId: z.string().nonempty('Informe a categoria'),
    bankAccountId: z.string().nonempty('Informe a conta bancária'),
    date: z.date()
});

type FormData = z.infer<typeof schema>

export function useEditTransactionModal(
    transaction: Transaction | null,
    onClose: () => void,
    onCloseAll: () => void
) {
    const [isLoading, setIsLoading] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const { accounts } = useBankAccounts();
    const { categories: categoriesList } = useCategories();

    const queryClient = useQueryClient();


    async function handleDeleteTransaction() {
        try {
            setIsLoading(true);

            await transactionsService.deleted(transaction!.id);
            queryClient.invalidateQueries({ queryKey: ['transactions'] });
            queryClient.invalidateQueries({ queryKey: ['bankAccounts'] });
            toast.success(
              transaction!.type === 'EXPENSE'
                  ? 'A despesa foi deletada com sucesso!'
                  : 'A receita foi deletada com sucesso!'
            );
            onCloseAll();
        } catch {
            toast.error(
              transaction!.type === 'EXPENSE'
                  ? 'Erro ao deletar a despesa!'
                  : 'Erro ao deletar a receita!'
            );
        } finally {
            setIsLoading(false);
        }
    }

    function handleOpenDeleteModal() {
        setIsDeleteModalOpen(true);
    }

    function handleCloseDeleteModal() {
        setIsDeleteModalOpen(false);
    }

    const {
        handleSubmit: hookFormHandleSubmit,
        formState: { errors },
        register,
        control,
    } = useForm<FormData>({
        resolver: zodResolver(schema),
        defaultValues: {
            bankAccountId: transaction?.bankAccountId,
            categoryId: transaction?.categoryId,
            name: transaction?.name,
            value: transaction?.value,
            date: transaction ? new Date(transaction.date) : new Date()
        }
    });


    const handleSubmit = hookFormHandleSubmit(async (data) => {
        try {
            setIsLoading(true);

            await transactionsService.update({
                ...data,
                id: transaction!.id,
                type: transaction!.type,
                value: currencyStringToNumber(data.value),
                date: data.date.toISOString()
            });

            queryClient.invalidateQueries({ queryKey: ['transactions'] });
            queryClient.invalidateQueries({ queryKey: ['bankAccounts'] });
            toast.success(
                transaction!.type === 'EXPENSE'
                    ? 'Despesa editada com sucesso!'
                    : 'Receita editada com sucesso!'
            );
            onClose();
        } catch {
            toast.error(
              transaction!.type === 'EXPENSE'
                  ? 'Erro ao salvar a despesa!'
                  : 'Erro ao salvar a receita!'
            );
        } finally {
            setIsLoading(false);
        }
    });


    const categories = useMemo(() => {
        return categoriesList.filter((category) => category.type === transaction?.type);
    }, [categoriesList, transaction]);


    return {
        handleSubmit,
        errors,
        register,
        control,
        accounts,
        categories,
        isLoading,
        isDeleteModalOpen,
        handleCloseDeleteModal,
        handleOpenDeleteModal,
        handleDeleteTransaction
    };
}

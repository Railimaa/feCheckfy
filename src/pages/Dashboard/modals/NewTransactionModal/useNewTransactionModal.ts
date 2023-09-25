import {  string, z } from 'zod';
import { useDashboardContext } from '../../components/DashboardContext/useDashboardContext';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMemo, useState } from 'react';
import { useCategories } from '../../../../hooks/useCategories';
import { useBankAccounts } from '../../../../hooks/useBankAccountss';
import { transactionsService } from '../../../../services/transactionsService';
import toast from 'react-hot-toast';
import { currencyStringToNumber } from '../../../../utils/currencyStringToNumber';
import { useQueryClient } from 'react-query';

const schema = z.object({
    value: z.string().nonempty('Informe o valor'),
    name: z.string().nonempty('Infome o nome'),
    categoryId: string().nonempty('Informe a categoria'),
    bankAccountId: string().nonempty('Informe a conta bancária'),
    date: z.date()
});

type FormData = z.infer<typeof schema>

export function UseNewTransactionModal() {
    const {
        isNewTransactionModalOpen,
        closeNewTransactionModal,
        newTransactionTypeModal
    } = useDashboardContext();

    const [isLoading, setIsLoading] = useState(false);

    const {
        handleSubmit: hookFormHandleSubmit,
        formState: { errors },
        register,
        control,
        reset
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const queryClient = useQueryClient();
    const { accounts } = useBankAccounts();
    const { categories: categoriesList } = useCategories();

    const handleSubmit = hookFormHandleSubmit(async (data) => {
        try {
            setIsLoading(true);

            await transactionsService.create({
                ...data,
                value: currencyStringToNumber(data.value),
                type: newTransactionTypeModal!,
                date: data.date.toISOString(),
            });
            queryClient.invalidateQueries({ queryKey: ['transactions'] });
            toast.success(
                newTransactionTypeModal === 'EXPENSE' ? 'Despesa cadastrada com sucesso!' : 'Receita cadastrada com sucesso!'
            );
            closeNewTransactionModal();
            reset();
        } catch {
            toast.error(
                newTransactionTypeModal === 'EXPENSE' ? 'Ocorreu um erro ao cadastrar a despesa' : 'Ocorreu um erro ao cadastrar a receita'
            );
        } finally {
            setIsLoading(false);
        }
    });


    const categories = useMemo(() => {
        return categoriesList.filter((category) => category.type === newTransactionTypeModal);
    }, [categoriesList, newTransactionTypeModal]);


    return {
        isNewTransactionModalOpen,
        closeNewTransactionModal,
        newTransactionTypeModal,
        handleSubmit,
        errors,
        register,
        control,
        accounts,
        categories,
        isLoading
    };
}

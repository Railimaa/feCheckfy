import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useBankAccounts } from '../../../../hooks/useBankAccountss';
import { useCategories } from '../../../../hooks/useCategories';
import { z } from 'zod';


const schema = z.object({
    value: z.string().nonempty('Informe o valor'),
    name: z.string().nonempty('Infome o nome'),
    categoryId: z.string().nonempty('Informe a categoria'),
    bankAccountId: z.string().nonempty('Informe a conta bancária'),
    date: z.date()
});

type FormData = z.infer<typeof schema>

export function useEditTransactionModal(
    transactionType: 'INCOME' | 'EXPENSE'
) {

    const {
        handleSubmit: hookFormHandleSubmit,
        formState: { errors },
        register,
        control,
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const { accounts } = useBankAccounts();
    const { categories: categoriesList } = useCategories();

    const handleSubmit = hookFormHandleSubmit(async (data) => {
        console.log(data);
    });


    const categories = useMemo(() => {
        return categoriesList.filter((category) => category.type === transactionType);
    }, [categoriesList, transactionType]);


    return {
        handleSubmit,
        errors,
        register,
        control,
        accounts,
        categories,
    };
}

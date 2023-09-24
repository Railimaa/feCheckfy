import {  string, z } from 'zod';
import { useDashboardContext } from '../../components/DashboardContext/useDashboardContext';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useBankAccounts } from '../../../../hooks/useBankAccounts';

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

    const {
        handleSubmit: hookFormHandleSubmit,
        formState: { errors },
        register,
        control
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const handleSubmit = hookFormHandleSubmit(async (data) => {
        console.log(data);
    });

    const { accounts } = useBankAccounts();

    return {
        isNewTransactionModalOpen,
        closeNewTransactionModal,
        newTransactionTypeModal,
        handleSubmit,
        errors,
        register,
        control,
        accounts,
    };
}

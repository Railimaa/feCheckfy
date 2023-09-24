import { Controller } from 'react-hook-form';
import { Button } from '../../../../components/Button';
import { DatePickerInput } from '../../../../components/DatePickerInput';
import { Input } from '../../../../components/Input/input';
import { InputCurrency } from '../../../../components/InputCurrency';
import { Modal } from '../../../../components/Modal';
import { Select } from '../../../../components/Select';
import { Form } from './style';
import { UseNewTransactionModal } from './useNewTransactionModal';


const options = [
    {
        value: 'CHECKING',
        label: 'Conta Corrente'
    },
    {
        value: 'INVESTMENT',
        label: 'Investimento'
    },
    {
        value: 'CASH',
        label: 'Dinheiro Fisíco'
    },
];


export function NewTransactionModal() {
    const {
        isNewTransactionModalOpen,
        closeNewTransactionModal,
        newTransactionTypeModal,
        handleSubmit,
        errors,
        register,
        control,
        accounts,
    } = UseNewTransactionModal();

    const isExpense = newTransactionTypeModal === 'EXPENSE';

    return (
        <Modal
            open={isNewTransactionModalOpen}
            onClose={closeNewTransactionModal}
            title={isExpense ? 'Nova Despesa' : 'Nova Receita'}
        >

            <Form onSubmit={handleSubmit}>
                <span id='saldo'>Valor {isExpense ? 'da despesa' : 'da receita'}</span>
                <div className="title-form">
                    <span id='rs'>R$</span>
                    <Controller
                        control={control}
                        name='value'
                        defaultValue='0'
                        render={({ field: { onChange, value } }) => (
                            <InputCurrency
                                value={value}
                                onChange={onChange}
                                error={errors.value?.message}
                            />
                        )}
                    />
                </div>

                <div className="inputs-form">
                    <Input
                        type='text'
                        placeholder={isExpense ? 'Nome da Despesa' : 'Nome da Receita'}
                        error={errors.name?.message}
                        {...register('name')}
                    />

                    <Controller
                        control={control}
                        name='categoryId'
                        defaultValue=''
                        render={({ field: { onChange, value } }) => (
                            <Select
                                placeholder='Categoria'
                                options={options}
                                onChange={onChange}
                                value={value}
                                error={errors.categoryId?.message}
                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name='bankAccountId'
                        defaultValue=''
                        render={({ field: { onChange, value } }) => (
                            <Select
                                placeholder={isExpense ? 'Pagar com' : 'Receber com'}
                                options={accounts.map(account => {
                                    return {
                                        value: account.id,
                                        label: account.name,
                                    };
                                })}
                                value={value}
                                onChange={onChange}
                                error={errors.bankAccountId?.message}
                            />
                        )}
                    />


                    <Controller
                        control={control}
                        name='date'
                        defaultValue={new Date}
                        render={({ field: { onChange, value } }) => (
                            <DatePickerInput
                                error={errors.date?.message}
                                value={value}
                                onChange={onChange}
                            />
                        )}
                    />

                </div>

                <div className="button-submit">
                    <Button>Criar Conta</Button>
                </div>
            </Form>

        </Modal>
    );
}

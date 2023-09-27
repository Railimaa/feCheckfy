import { Controller } from 'react-hook-form';
import { Button } from '../../../../components/Button';
import { DatePickerInput } from '../../../../components/DatePickerInput';
import { Input } from '../../../../components/Input/input';
import { InputCurrency } from '../../../../components/InputCurrency';
import { Modal } from '../../../../components/Modal';
import { Select } from '../../../../components/Select';
import { Form } from './style';
import { useEditTransactionModal } from './useEditTransactionModal';

interface EditTransactionModalProps {
  transactionType: 'INCOME' | 'EXPENSE'
  open: boolean;
  onClose: () => void;
}



export function EditTransactionModal({ transactionType, open, onClose }: EditTransactionModalProps) {
    const {
        handleSubmit,
        errors,
        register,
        control,
        accounts,
        categories
    } = useEditTransactionModal(transactionType);

    const isExpense = transactionType === 'EXPENSE';

    return (
        <Modal
            open={open}
            onClose={onClose}
            title={isExpense ? 'Editar Despesa' : 'Editar Receita'}
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
                                onChange={onChange}
                                value={value}
                                error={errors.categoryId?.message}
                                options={categories.map(category => ({
                                    value: category.id,
                                    label: category.name
                                }))}
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
                                value={value}
                                onChange={onChange}
                                error={errors.bankAccountId?.message}
                                options={accounts.map(account => ({
                                    value: account.id,
                                    label: account.name
                                }))}
                            />
                        )}
                    />


                    <Controller
                        control={control}
                        name='date'
                        defaultValue={new Date()}
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
                    <Button>Salvar</Button>
                </div>
            </Form>

        </Modal>
    );
}

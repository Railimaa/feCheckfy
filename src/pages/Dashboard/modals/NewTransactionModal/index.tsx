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


const optionsPag = [
    {
        value: 'NUBANK',
        label: 'Nubank'
    },
    {
        value: 'XP INVESTIMENTOS',
        label: 'XP Investimentos'
    },
    {
        value: 'CARTEIRA',
        label: 'Carteira'
    },
];



export function NewTransactionModal() {
    const { isNewTransactionModalOpen, closeNewTransactionModal, newTransactionTypeModal } = UseNewTransactionModal();

    const isExpense = newTransactionTypeModal === 'EXPENSE';

    return (
        <Modal
            open={isNewTransactionModalOpen}
            onClose={closeNewTransactionModal}
            title={isExpense ? 'Nova Despesa' : 'Nova Receita'}
        >

            <Form>
                <span id='saldo'>Valor {isExpense ? 'da despesa' : 'da receita'}</span>
                <div className="title-form">
                    <span>R$</span>
                    <InputCurrency />
                </div>

                <div className="inputs-form">
                    <Input
                        type='text'
                        name='name'
                        placeholder={isExpense ? 'Nome da Despesa' : 'Nome da Receita'}
                    />

                    <Select
                        placeholder='Categoria'
                        options={options}
                    />

                    <Select
                        placeholder={isExpense ? 'Pagar com' : 'Receber com'}
                        options={optionsPag}
                    />

                    <DatePickerInput />
                </div>

                <div className="button-submit">
                    <Button>Criar Conta</Button>
                </div>
            </Form>

        </Modal>
    );
}

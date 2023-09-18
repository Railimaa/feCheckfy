import { Input } from '../../../../components/Input/input';
import { InputCurrency } from '../../../../components/InputCurrency';
import { Modal } from '../../../../components/Modal';
import { Select } from '../../../../components/Select';
import { Container, Form } from './style';
import { useNewAccountModal } from './useNewAccountModal';

export function NewAccountModal() {
    const { isNewAccountModalOpen, closeNewAccountModal } = useNewAccountModal();

    return (
        <Container>
            <Modal title="Nova Conta" open={isNewAccountModalOpen} onClose={closeNewAccountModal}>

                <Form>
                    <span id='saldo'>Saldo</span>
                    <div className="title-form">
                        <span>R$</span>
                        <InputCurrency />
                    </div>

                    <div className="inputs-form">
                        <Input
                            type='text'
                            name='name'
                            placeholder='Nome da Conta'
                        />

                        <Select
                            error='Voce precisa escolher'
                        />
                    </div>
                </Form>

            </Modal>
        </Container>
    );
}

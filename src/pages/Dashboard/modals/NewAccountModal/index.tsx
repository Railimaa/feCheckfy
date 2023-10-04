import { Controller } from 'react-hook-form';
import { Button } from '../../../../components/Button';
import { ColorsDropdownInput } from '../../../../components/ColorsDropdownInput';
import { Input } from '../../../../components/Input/input';
import { InputCurrency } from '../../../../components/InputCurrency';
import { Modal } from '../../../../components/Modal';
import { Select } from '../../../../components/Select';
import { Container, Form } from './style';
import { useNewAccountModal } from './useNewAccountModal';

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

export function NewAccountModal() {
    const {
        isNewAccountModalOpen,
        closeNewAccountModal,
        handleSubmit,
        register,
        errors,
        control,
        isLoadingButton
    } = useNewAccountModal();

    return (
        <Container>
            <Modal
                title="Nova Conta"
                open={isNewAccountModalOpen}
                onClose={closeNewAccountModal}
            >

                <Form onSubmit={handleSubmit}>
                    <span id='saldo'>Saldo Inicial</span>
                    <div className="title-form">
                        <span className='span-saldo'>R$</span>

                        <Controller
                            control={control}
                            name='initialBalance'
                            defaultValue='0'
                            render={({ field: { onChange, value }}) => (
                                <InputCurrency
                                    error={errors.initialBalance?.message}
                                    onChange={onChange}
                                    value={value}
                                />
                            )}
                        />
                    </div>

                    <div className="inputs-form">
                        <Input
                            type='text'
                            placeholder='Nome da Conta'
                            {...register('name')}
                            error={errors.name?.message}
                        />

                        <Controller
                            control={control}
                            name='type'
                            defaultValue='CHECKING'
                            render={({ field: { onChange, value } }) => (
                                <Select
                                    placeholder='Tipo'
                                    options={options}
                                    error={errors.type?.message}
                                    onChange={onChange}
                                    value={value}
                                />
                            )}

                        />

                        <Controller
                            control={control}
                            name='color'
                            defaultValue=''
                            render={({ field: { onChange, value } }) => (
                                <ColorsDropdownInput
                                    error={errors.color?.message}
                                    onChange={onChange}
                                    value={value}
                                />
                            )}
                        />

                    </div>

                    <div className="button-submit">
                        <Button isLoading={isLoadingButton}>Criar</Button>
                    </div>
                </Form>

            </Modal>
        </Container>
    );
}

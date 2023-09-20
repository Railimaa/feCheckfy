
import { PlusIcon } from '@radix-ui/react-icons';
import { Container } from './style';
import { DropdownMenu } from '../../../../components/DropdownMenu';
import { CategoryIcon } from '../../../../assets/icons/categories/CategoryIcon';
import { BankAccountIcon } from '../../../../assets/icons/BankAccountIcon';
import { useDashboardContext } from '../DashboardContext/useDashboardContext';

export function Fab() {
    const { openNewAccountModal, openNewTransactionModal } = useDashboardContext();

    return (
        <Container>
            <DropdownMenu.Root>

                <DropdownMenu.Trigger >
                    <PlusIcon width={24} height={24}/>
                </DropdownMenu.Trigger>

                <DropdownMenu.Content side='top'>
                    <DropdownMenu.Item style={{ gap: '8px' }} onSelect={() => openNewTransactionModal('EXPENSE')}>
                        <CategoryIcon type='expense' />
                        Nova Despesa
                    </DropdownMenu.Item>

                    <DropdownMenu.Item style={{ gap: '8px' }} onSelect={() => openNewTransactionModal('INCOME')}>
                        <CategoryIcon type='income' />
                        Nova Receita
                    </DropdownMenu.Item>

                    <DropdownMenu.Item style={{ gap: '8px' }} onSelect={openNewAccountModal}>
                        <BankAccountIcon />
                        Nova Conta
                    </DropdownMenu.Item>

                </DropdownMenu.Content>

            </DropdownMenu.Root>
        </Container>
    );
}

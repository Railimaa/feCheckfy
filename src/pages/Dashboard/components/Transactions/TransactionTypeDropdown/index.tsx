import { ChevronDownIcon } from '@radix-ui/react-icons';
import { TransactionsIcon } from '../../../../../assets/icons/TransactionsIcon';
import { Container } from './style';
import { DropdownMenu } from '../../../../../components/DropdownMenu';
import { IncomeIcon } from '../../../../../assets/icons/IncomeIcon';
import { ExpensesIcon } from '../../../../../assets/icons/ExpensesIcon';

export function TransactionTypeDropdown() {
    return (
        <DropdownMenu.Root>

            <Container>
                <DropdownMenu.Trigger>
                    <TransactionsIcon />
                    <span>Transações</span>
                    <ChevronDownIcon color='#212529' />
                </DropdownMenu.Trigger>

                <DropdownMenu.Content style={{ width: '279px' }}>

                    <DropdownMenu.Item style={{ gap: '8px' }}>
                        <IncomeIcon />
                        Receitas
                    </DropdownMenu.Item>

                    <DropdownMenu.Item style={{ gap: '8px' }}>
                        <ExpensesIcon />
                       Despesas
                    </DropdownMenu.Item>

                    <DropdownMenu.Item style={{ gap: '8px' }}>
                        <TransactionsIcon />
                       Transações
                    </DropdownMenu.Item>
                </DropdownMenu.Content>

            </Container>

        </DropdownMenu.Root>
    );
}

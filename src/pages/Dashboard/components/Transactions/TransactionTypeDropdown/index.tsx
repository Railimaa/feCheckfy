import { ChevronDownIcon } from '@radix-ui/react-icons';
import { TransactionsIcon } from '../../../../../assets/icons/TransactionsIcon';
import { Container } from './style';
import { DropdownMenu } from '../../../../../components/DropdownMenu';
import { IncomeIcon } from '../../../../../assets/icons/IncomeIcon';
import { ExpensesIcon } from '../../../../../assets/icons/ExpensesIcon';

interface TransactionTypeDropdownProps {
  onSelect: (type: 'INCOME' | 'EXPENSE' | undefined) => void;
  selectedType: 'INCOME' | 'EXPENSE' | undefined;
}

export function TransactionTypeDropdown({ onSelect, selectedType }: TransactionTypeDropdownProps) {
    return (
        <DropdownMenu.Root>

            <Container>
                <DropdownMenu.Trigger>
                    {selectedType === 'EXPENSE' && <ExpensesIcon />}
                    {selectedType === 'INCOME' &&  <IncomeIcon />}
                    {selectedType === undefined && <TransactionsIcon />}

                    <span>
                        {selectedType === 'EXPENSE' && 'Despesas'}
                        {selectedType === 'INCOME' && 'Receitas'}
                        {selectedType === undefined && 'Transações'}
                    </span>
                    <ChevronDownIcon color='#212529' />
                </DropdownMenu.Trigger>

                <DropdownMenu.Content style={{ width: '279px' }}>

                    <DropdownMenu.Item style={{ gap: '8px' }} onSelect={() => onSelect('INCOME')}>
                        <IncomeIcon />
                        Receitas
                    </DropdownMenu.Item>

                    <DropdownMenu.Item style={{ gap: '8px' }} onSelect={() => onSelect('EXPENSE')}>
                        <ExpensesIcon />
                        Despesas
                    </DropdownMenu.Item>

                    <DropdownMenu.Item style={{ gap: '8px' }} onSelect={() => onSelect(undefined)}>
                        <TransactionsIcon />
                        Transações
                    </DropdownMenu.Item>
                </DropdownMenu.Content>

            </Container>

        </DropdownMenu.Root>
    );
}

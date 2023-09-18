
import { PlusIcon } from '@radix-ui/react-icons';
import { Container } from './style';
import { DropdownMenu } from '../../../../components/DropdownMenu';
import { CategoryIcon } from '../../../../assets/icons/categories/CategoryIcon';
import { BankAccountIcon } from '../../../../assets/icons/BankAccountIcon';

export function Fab() {
    return (
        <Container>
            <DropdownMenu.Root>

                <DropdownMenu.Trigger>
                    <PlusIcon width={24} height={24}/>
                </DropdownMenu.Trigger>

                <DropdownMenu.Content side='top'>
                    <DropdownMenu.Item style={{ gap: '8px' }}>
                        <CategoryIcon type='expense' />
                        Nova Despesa
                    </DropdownMenu.Item>

                    <DropdownMenu.Item style={{ gap: '8px' }}>
                        <CategoryIcon type='income' />
                        Nova Receita
                    </DropdownMenu.Item>

                    <DropdownMenu.Item style={{ gap: '8px' }}>
                        <BankAccountIcon />
                        Nova Conta
                    </DropdownMenu.Item>

                </DropdownMenu.Content>

            </DropdownMenu.Root>
        </Container>
    );
}
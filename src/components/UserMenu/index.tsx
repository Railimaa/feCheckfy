import { ExitIcon } from '@radix-ui/react-icons';
import { DropdownMenu } from '../DropdownMenu';


import { Container } from './style';

export function UserMenu() {
    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger>
                <Container>
                    <span>MA</span>
                </Container>
            </DropdownMenu.Trigger>

            <DropdownMenu.Content>

                <DropdownMenu.Item>
                          Sair
                    <ExitIcon color='red' width={24} height={24} />
                </DropdownMenu.Item>


            </DropdownMenu.Content>
        </DropdownMenu.Root>
    );
}

import { ExitIcon } from '@radix-ui/react-icons';
import { DropdownMenu } from '../DropdownMenu';
import { Container } from './style';
import { useUserMenu } from './useUserMenu';

export function UserMenu() {
    const { logout } = useUserMenu();

    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger>
                <Container>
                    <span>MA</span>
                </Container>
            </DropdownMenu.Trigger>

            <DropdownMenu.Content style={{ width: '130px' }}>

                <DropdownMenu.Item style={{ display: 'flex', justifyContent: 'space-between' }} onSelect={logout}>
                         Sair
                    <ExitIcon width={18} height={18} />
                </DropdownMenu.Item>


            </DropdownMenu.Content>
        </DropdownMenu.Root>
    );
}

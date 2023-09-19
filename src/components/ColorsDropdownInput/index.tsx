import { DropdownMenu } from '../DropdownMenu';
import { Container } from './style';
import { FieldError } from '../FieldError';
import { IconColor } from '../../assets/icons/IconColor';

interface ColorsDropdownInputProps {
  error?: string;
}


export function ColorsDropdownInput({ error }: ColorsDropdownInputProps) {
    return (
        <div>
            <Container color={error}>

                <DropdownMenu.Root>
                    <DropdownMenu.Trigger>
                        Cor
                    </DropdownMenu.Trigger>

                    <DropdownMenu.Content style={{ zIndex: '99' }}>
                        <DropdownMenu.Item>
                            <IconColor color='#fff' bg='black'/>
                        </DropdownMenu.Item>
                    </DropdownMenu.Content>
                </DropdownMenu.Root>


            </Container>

            {error && (
                <FieldError message={error}/>
            )}

        </div>
    );
}

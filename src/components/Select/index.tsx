import * as RdxSelect from '@radix-ui/react-select';
import { ContainerContent, ContainerTrigger } from './style';
import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import { FieldError } from '../FieldError';

interface SelectProps {
  error?: string;
}

export function Select({ error }: SelectProps) {
    return (
        <div>
            <RdxSelect.Root>

                <ContainerTrigger color={error}>
                    <RdxSelect.Trigger className='trigger'>

                        <RdxSelect.Value />

                        <RdxSelect.Icon className='icon'>
                            <ChevronDownIcon width={24} height={24} color='#343A40'/>
                        </RdxSelect.Icon>

                    </RdxSelect.Trigger>
                </ContainerTrigger>

                <RdxSelect.Portal>

                    <ContainerContent>
                        <RdxSelect.Content className='content'>

                            <RdxSelect.ScrollUpButton className='scroll-up-button'>
                                <ChevronUpIcon />
                            </RdxSelect.ScrollUpButton>

                            <RdxSelect.Viewport className='view-port'>

                                <RdxSelect.Item value='apple' className='item'>
                                    <RdxSelect.ItemText>Apple</RdxSelect.ItemText>
                                </RdxSelect.Item>

                                <RdxSelect.Item value='banana' className='item'>
                                    <RdxSelect.ItemText>Banana</RdxSelect.ItemText>
                                </RdxSelect.Item>

                                <RdxSelect.Item value='laranja' className='item'>
                                    <RdxSelect.ItemText className='item-text'>Laranja</RdxSelect.ItemText>
                                </RdxSelect.Item>

                            </RdxSelect.Viewport>

                            <RdxSelect.ScrollDownButton className='scroll-down-button'>
                                <ChevronDownIcon />
                            </RdxSelect.ScrollDownButton>

                        </RdxSelect.Content>

                    </ContainerContent>

                </RdxSelect.Portal>

            </RdxSelect.Root>

            {error && (
                <FieldError message={error}/>
            )}
        </div>
    );
}



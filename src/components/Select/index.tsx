import * as RdxSelect from '@radix-ui/react-select';
import { ContainerContent, ContainerTrigger, Container } from './style';
import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import { FieldError } from '../FieldError';


interface SelectProps {
  error?: string;
  placeholder?: string,
  onChange?: (value: string) => void;
  value?: string;
  options: {
      value: string;
      label: string;
  }[];
}

export function Select({ error, placeholder, onChange, value, options }: SelectProps) {

    function handleChange(value: string) {
        onChange?.(value);
    }


    return (
        <Container>

            <div className="relative">
                <label>
                    {placeholder}
                </label>
            </div>

            <RdxSelect.Root value={value} onValueChange={handleChange}>
                <ContainerTrigger color={error}>
                    <RdxSelect.Trigger className='trigger' >

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
                                {options.map((option) => (
                                    <RdxSelect.Item
                                        value={option.value}
                                        key={option.value}
                                        className='item'
                                    >
                                        <RdxSelect.ItemText>
                                            {option.label}
                                        </RdxSelect.ItemText>
                                    </RdxSelect.Item>
                                ))}
                            </RdxSelect.Viewport>

                            <RdxSelect.ScrollDownButton className='scroll-down-button'>
                                <ChevronDownIcon />
                            </RdxSelect.ScrollDownButton>
                        </RdxSelect.Content>
                    </ContainerContent>
                </RdxSelect.Portal>

            </RdxSelect.Root>


            {error && (
                <FieldError message={error} />
            )}
        </Container>
    );
}



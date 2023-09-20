import { useState } from 'react';
import { FieldError } from '../FieldError';
import { Container } from './style';
import { formatDate } from '../../utils/formatDate';
import { Popover } from '../Popover';

interface DatePickerInputProps {
  error?: string;
}

export function DatePickerInput({ error }: DatePickerInputProps) {
    const [selectedDate] = useState(new Date());

    return (
        <Container color={error}>
            <Popover.Root>
                <Popover.Trigger>
                    <button type='button'>
                        <span>Data</span>
                        {formatDate(selectedDate)}
                    </button>
                </Popover.Trigger>

                <Popover.Content>
                    Ola
                </Popover.Content>
            </Popover.Root>

            {error && (
                <FieldError message={error}/>
            )}
        </Container>
    );
}

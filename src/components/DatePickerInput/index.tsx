import { useState } from 'react';
import { FieldError } from '../FieldError';
import { Container } from './style';
import { formatDate } from '../../utils/formatDate';
import { Popover } from '../Popover';
import { DatePicker } from '../DatePicker';

interface DatePickerInputProps {
  error?: string;
}

export function DatePickerInput({ error }: DatePickerInputProps) {
    const [selectedDate, setSelectedDate] = useState(new Date());

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
                    <DatePicker value={selectedDate} onChange={date => setSelectedDate(date)} />
                </Popover.Content>
            </Popover.Root>

            {error && (
                <FieldError message={error}/>
            )}
        </Container>
    );
}

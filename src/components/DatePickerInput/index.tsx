import { useState } from 'react';
import { FieldError } from '../FieldError';
import { Container } from './style';
import { formatDate } from '../../utils/formatDate';
import { Popover } from '../Popover';
import { DatePicker } from '../DatePicker';

interface DatePickerInputProps {
  error?: string;
  value?: Date;
  onChange?: (date: Date) => void;
}

export function DatePickerInput({ error, value, onChange }: DatePickerInputProps) {
    const [selectedDate, setSelectedDate] = useState(value ?? new Date());

    function handleChange(date: Date) {
        setSelectedDate(date);
        onChange?.(date);
    }


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
                    <DatePicker
                        value={selectedDate}
                        onChange={date => handleChange(date)}
                    />
                </Popover.Content>
            </Popover.Root>

            {error && (
                <FieldError message={error}/>
            )}
        </Container>
    );
}

import { ptBR } from 'date-fns/locale';
import { DayPicker } from 'react-day-picker';
import { Container } from './style';
import { format } from 'date-fns';
import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter';

interface DatePickerProps {
  value: Date;
  onChange: (date: Date) => void
}

export function DatePicker({ value, onChange }: DatePickerProps) {
    return (
        <Container>
            <DayPicker
                locale={ptBR}
                selected={value}
                mode='single'
                onSelect={(date) => onChange(date ?? new Date())}
                classNames={{
                    caption: 'caption',
                    nav: 'nav',
                    nav_button_previous: 'nav_button_previous',
                    nav_button_next: 'nav_button_next',
                    head_cell: 'head_cell',
                    button: 'button',
                    day: 'day',
                    day_today: 'day_today',
                    day_selected: 'day_selected'
                }}
                formatters={{
                    formatCaption: (date, options) => {
                        return (
                            <span>
                                {capitalizeFirstLetter(format(date, 'LLLL yyyy', options))}
                            </span>
                        );
                    }
                }}
            />
        </Container>
    );
}

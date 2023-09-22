import { NumericFormat } from 'react-number-format';
import { ContainerInput } from './style';
import { FieldError } from '../FieldError';

interface InputCurrencyProps {
  error?: string;
  value?: string | number;
  onChange?: (value: string) => void;
}

export function InputCurrency({ error, value, onChange }: InputCurrencyProps) {
    return (
        <ContainerInput color={error}>
            <NumericFormat
                thousandSeparator='.'
                decimalSeparator=','
                value={value}
                onValueChange={event => onChange?.(event.value)}
            />


            {error && (
                <FieldError message={error}/>
            )}
        </ContainerInput>
    );
}

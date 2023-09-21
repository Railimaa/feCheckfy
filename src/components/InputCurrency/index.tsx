import { NumericFormat } from 'react-number-format';
import { ContainerInput } from './style';
import { FieldError } from '../FieldError';

interface InputCurrencyProps {
  error?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export function InputCurrency({ error, value, onChange }: InputCurrencyProps) {
    const formattedValue = value?.replace(/,/g, '.');

    return (
        <ContainerInput color={error}>
            <NumericFormat
                thousandSeparator='.'
                decimalSeparator=','
                value={formattedValue}
                onValueChange={(values) => {
                    const { value: newValue } = values;
                    onChange?.(newValue?.replace(/\./g, ','));
                }}
            />


            {error && (
                <FieldError message={error}/>
            )}
        </ContainerInput>
    );
}

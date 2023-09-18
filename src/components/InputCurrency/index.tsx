import { NumericFormat } from 'react-number-format';
import { ContainerInput } from './style';

export function InputCurrency() {
    return (
        <ContainerInput>
            <NumericFormat
                thousandSeparator="."
                decimalSeparator=','
                defaultValue="0,00"
            />
        </ContainerInput>
    );
}

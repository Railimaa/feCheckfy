
import { BankAccountTypeIcon } from '../../../../../assets/icons/BankAccountTypeIcon';
import { formatCurrency } from '../../../../../utils/formatCurrency';

import { Container } from './style';


interface AccountCardProps {
  color: string;
  name: string;
  balance: number;
  type: 'CASH' | 'CHECKING' | 'INVESTMENT'
}

export function AccountCard({ color, name, balance, type }: AccountCardProps) {
    return (
        <Container color={color}>

            <div className='content'>
                <BankAccountTypeIcon type={type}/>

                <span>{name}</span>
            </div>

            <div className="saldo">
                <span>{formatCurrency(balance)}</span>
                <small>Saldo atual</small>
            </div>
        </Container>
    );
}

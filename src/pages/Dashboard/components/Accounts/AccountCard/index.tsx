
import { BankAccountTypeIcon } from '../../../../../assets/icons/BankAccountTypeIcon';
import { formatCurrency } from '../../../../../utils/formatCurrency';
import { useDashboardContext } from '../../DashboardContext/useDashboardContext';

import { Container } from './style';


interface AccountCardProps {
  color: string;
  name: string;
  balance: number;
  type: 'CASH' | 'CHECKING' | 'INVESTMENT'
}


export function AccountCard({ color, name, balance, type }: AccountCardProps) {
    const { arValuesVisible } = useDashboardContext();

    return (
        <Container color={color} >

            <div className='content'>
                <BankAccountTypeIcon type={type} />

                <span>{name}</span>
            </div>

            <div className="saldo">
                <span
                    style={{ filter: arValuesVisible ? 'blur(6px)' : 'none' }}
                >
                    {formatCurrency(balance)}
                </span>

                <small>Saldo atual</small>
            </div>
        </Container>
    );
}

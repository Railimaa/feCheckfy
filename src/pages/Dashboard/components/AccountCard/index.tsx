import { CategoryIcon } from '../../../../assets/icons/categories/CategoryIcon';
import { formatCurrency } from '../../../../utils/formatCurrency';
import { Container } from './style';

interface AccountCardProps {
  color: string;
  name: string;
  balance: number;
}

export function AccountCard({ color, name, balance }: AccountCardProps) {
    return (
        <Container color={color}>
            <div className='content'>
                <CategoryIcon type='income'/>
                <span>{name}</span>
            </div>

            <div className="saldo">
                <span>{formatCurrency(balance)}</span>
                <small>Saldo atual</small>
            </div>
        </Container>
    );
}

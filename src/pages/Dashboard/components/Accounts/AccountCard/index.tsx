import { BankAccountTypeIcon } from '../../../../../assets/icons/BankAccountTypeIcon';
import { BankAccount } from '../../../../../types/BankAccount';
import { formatCurrency } from '../../../../../utils/formatCurrency';
import { useDashboardContext } from '../../DashboardContext/useDashboardContext';
import { Container } from './style';


interface AccountCardProps {
  account: BankAccount;
}

export function AccountCard({ account }: AccountCardProps) {
    const { color, name, currentBalance, type } = account;
    const { arValuesVisible, openEditAccountModal } = useDashboardContext();

    return (
        <Container
            color={color}
            onClick={() => openEditAccountModal(account)}
            role='button'
        >
            <div className='content'>
                <BankAccountTypeIcon type={type} />

                <span>{name}</span>
            </div>

            <div className="saldo">
                <span
                    style={{ filter: arValuesVisible ? 'blur(6px)' : 'none' }}
                >
                    {formatCurrency(currentBalance)}
                </span>

                <small>Saldo atual</small>
            </div>
        </Container>
    );
}

import { CategoryIcon } from '../../../../../assets/icons/categories/CategoryIcon';
import { Transaction } from '../../../../../types/Transaction';
import { formatCurrency } from '../../../../../utils/formatCurrency';
import { formatDate } from '../../../../../utils/formatDate';
import { Container } from './style';

interface CardProps {
  transaction: Transaction;
  arValuesVisible: boolean;
  handleOpenEditModal: (transaction: Transaction) => void;
}

export function Card({ transaction, arValuesVisible, handleOpenEditModal }: CardProps) {
    return (
        <Container onClick={() => handleOpenEditModal(transaction)} role='button'>
            <div className="content-transaction">
                <CategoryIcon
                    type={transaction.type === 'EXPENSE' ? 'expense' : 'income'}
                    category={transaction.category?.icon}
                />

                <div className="title-and-date">
                    <strong>{transaction.name}</strong>
                    <span>{formatDate(new Date(transaction.date))}</span>
                </div>
            </div>

            {transaction.type === 'EXPENSE' && (
                <span id='expense'
                    style={{ filter: arValuesVisible ? 'blur(12px)' : 'none' }}
                >
                -{formatCurrency(transaction.value)}
                </span>
            )}

            {transaction.type === 'INCOME' && (
                <span id='income'
                    style={{ filter: arValuesVisible ? 'blur(12px)' : 'none' }}
                >
                +{formatCurrency(transaction.value)}
                </span>
            )}
        </Container>
    );
}

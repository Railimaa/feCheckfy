import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { Modal } from '../../../../../components/Modal';
import { ContainerAccounts, ContainerYears } from './style';
import { Button } from '../../../../../components/Button';
import { useFiltersModal } from './useFiltersModal';

interface FiltersModalProps {
  open: boolean;
  onClose: () => void;
  onApplyFilters: (filters: { bankAccountId: string | undefined, year: number}) => void;
}

export function FiltersModal({ open, onClose, onApplyFilters }: FiltersModalProps) {
    const {
        selectedBankAccountId,
        handleSelectBankAccountId,
        selectedYear,
        handleChangeYear,
        accounts
    } = useFiltersModal();


    return (
        <Modal open={open} title='Filtros' onClose={onClose}>
            <ContainerAccounts>
                <span>Conta</span>

                <div className="actions">
                    {accounts.map((account) => (
                        <button
                            key={account.id}
                            onClick={() => handleSelectBankAccountId(account.id)}
                            className={account.id === selectedBankAccountId ? 'btn-active' : ''}
                        >
                            {account.name}
                        </button>
                    ))}
                </div>
            </ContainerAccounts>

            <ContainerYears>
                <span>Ano</span>

                <div className="years">
                    <button onClick={() => handleChangeYear(-1)}>
                        <ChevronLeftIcon width={24} height={24}/>
                    </button>

                    <div className="year">
                        {selectedYear}
                    </div>

                    <button onClick={() => handleChangeYear(+ 1)}>
                        <ChevronRightIcon width={24} height={24}/>
                    </button>
                </div>
            </ContainerYears>

            <Button
                style={{ width: '100%', marginTop: '40px' }}
                onClick={() => onApplyFilters({ bankAccountId: selectedBankAccountId, year: selectedYear })}
            >
                 Aplicar Filtros
            </Button>
        </Modal>
    );
}

import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { Modal } from '../../../../../components/Modal';
import { ContainerAccounts, ContainerYears } from './style';
import { Button } from '../../../../../components/Button';
import { useFiltersModal } from './useFiltersModal';

interface FiltersModalProps {
  open: boolean;
  onClose: () => void;
}

const mockedBankAccounts = [
    {
        id: '124',
        name: 'XP Investimentos'
    },
    {
        id: '256',
        name: 'Nubank'
    },
    {
        id: '789',
        name: 'Carteira'
    }
];

export function FiltersModal({ open, onClose }: FiltersModalProps) {
    const { handleSelectBankAccountId } = useFiltersModal();


    return (
        <Modal open={open} title='Filtros' onClose={onClose}>
            <ContainerAccounts>
                <span>Conta</span>

                <div className="actions">
                    {mockedBankAccounts.map((account) => (
                        <button
                            key={account.id}
                            onClick={() => handleSelectBankAccountId(account.id)}
                        >
                            {account.name}
                        </button>
                    ))}
                </div>
            </ContainerAccounts>

            <ContainerYears>
                <span>Ano</span>

                <div className="years">
                    <button>
                        <ChevronLeftIcon width={24} height={24}/>
                    </button>

                    <div className="year">
                        2023
                    </div>

                    <button>
                        <ChevronRightIcon width={24} height={24}/>
                    </button>
                </div>
            </ContainerYears>

            <Button style={{ width: '100%', marginTop: '40px' }}>
                 Aplicar Filtros
            </Button>
        </Modal>
    );
}

import { useDashboardContext } from '../../components/DashboardContext/useDashboardContext';

export function UseNewTransactionModal() {
    const { isNewTransactionModalOpen, closeNewTransactionModal, newTransactionTypeModal } = useDashboardContext();

    return {
        isNewTransactionModalOpen,
        closeNewTransactionModal,
        newTransactionTypeModal
    };
}

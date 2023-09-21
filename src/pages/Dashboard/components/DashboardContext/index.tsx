import { createContext, useCallback, useState } from 'react';
import { BankAccount } from '../../../../types/bankAccount';

interface DashboardContextValue {
  arValuesVisible: boolean
  isNewAccountModalOpen: boolean;
  isEditAccountModalOpen: boolean;
  isAccountSelectedEdit: null | BankAccount;
  isNewTransactionModalOpen: boolean;
  newTransactionTypeModal: 'INCOME' | 'EXPENSE' | null
  toogleValueVisibility: () => void;
  openNewAccountModal: () => void;
  openEditAccountModal: (account: BankAccount) => void;
  closeEditAccountModal: () => void;
  closeNewAccountModal: () => void;
  openNewTransactionModal: (type: 'INCOME' | 'EXPENSE') => void;
  closeNewTransactionModal: () => void;
}

export const DashboardContext = createContext({} as DashboardContextValue);


export function DashboardProvider({ children }: { children: React.ReactNode }) {
    const [arValuesVisible, setArValuesVisible] = useState(false);
    const [isNewAccountModalOpen, setIsNewAccountModalOpen] = useState(false);
    const [isEditAccountModalOpen, setIsEditAccountModalOpen] = useState(false);
    const [isAccountSelectedEdit, setIsAccountSelectedEdit] = useState<null | BankAccount>(null);
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
    const [newTransactionTypeModal, setNewTransactionTypeModal] = useState<'INCOME' | 'EXPENSE' | null>(null);

    const toogleValueVisibility = useCallback(() => {
        setArValuesVisible(prevState => !prevState);
    }, []);

    const openNewAccountModal = useCallback(() => {
        setIsNewAccountModalOpen(true);
    }, []);

    const closeNewAccountModal = useCallback(() => {
        setIsNewAccountModalOpen(false);
    }, []);

    const openEditAccountModal = useCallback((account: BankAccount) => {
        setIsAccountSelectedEdit(account);
        setIsEditAccountModalOpen(true);
    }, []);

    const closeEditAccountModal = useCallback(() => {
        setIsAccountSelectedEdit(null);
        setIsEditAccountModalOpen(false);
    }, []);


    const openNewTransactionModal = useCallback((type: 'INCOME' | 'EXPENSE') => {
        setNewTransactionTypeModal(type);
        setIsNewTransactionModalOpen(true);
    }, []);

    const closeNewTransactionModal = useCallback(() => {
        setNewTransactionTypeModal(null);
        setIsNewTransactionModalOpen(false);
    }, []);

    return (
        <DashboardContext.Provider
            value={{
                arValuesVisible,
                toogleValueVisibility,
                isNewAccountModalOpen,
                openNewAccountModal,
                closeNewAccountModal,
                isNewTransactionModalOpen,
                openNewTransactionModal,
                closeNewTransactionModal,
                newTransactionTypeModal,
                isEditAccountModalOpen,
                isAccountSelectedEdit,
                openEditAccountModal,
                closeEditAccountModal
            }}>

            {children}
        </DashboardContext.Provider>
    );
}

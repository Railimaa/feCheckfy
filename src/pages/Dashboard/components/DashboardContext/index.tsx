import { createContext, useCallback, useState } from 'react';

interface DashboardContextValue {
  arValuesVisible: boolean
  isNewAccountModalOpen: boolean;
  toogleValueVisibility: () => void;
  openNewAccountModal: () => void;
  closeNewAccountModal: () => void;
}

export const DashboardContext = createContext({} as DashboardContextValue);


export function DashboardProvider({ children }: { children: React.ReactNode }) {
    const [arValuesVisible, setArValuesVisible] = useState(true);
    const [isNewAccountModalOpen, setIsNewAccountModalOpen] = useState(true);

    const toogleValueVisibility = useCallback(() => {
        setArValuesVisible(prevState => !prevState);
    }, []);

    const openNewAccountModal = useCallback(() => {
        setIsNewAccountModalOpen(true);
    }, []);

    const closeNewAccountModal = useCallback(() => {
        setIsNewAccountModalOpen(false);
    }, []);

    return (
        <DashboardContext.Provider value={{ arValuesVisible, toogleValueVisibility, isNewAccountModalOpen, openNewAccountModal, closeNewAccountModal}}>
            {children}
        </DashboardContext.Provider>
    );
}

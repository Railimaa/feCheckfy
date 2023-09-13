import { createContext, useCallback, useState } from 'react';

interface DashboardContextValue {
  arValuesVisible: boolean
  toogleValueVisibility: () => void;
}

export const DashboardContext = createContext({} as DashboardContextValue);


export function DashboardProvider({ children }: { children: React.ReactNode }) {
    const [arValuesVisible, setArValuesVisible] = useState(true);

    const toogleValueVisibility = useCallback(() => {
        setArValuesVisible(prevState => !prevState);
    }, [arValuesVisible]);

    return (
        <DashboardContext.Provider value={{ arValuesVisible, toogleValueVisibility }}>
            {children}
        </DashboardContext.Provider>
    );
}

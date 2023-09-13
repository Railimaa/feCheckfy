import { useDashboardContext } from '../DashboardContext/useDashboardContext';

export function useTransaction() {
    const { arValuesVisible } = useDashboardContext();


    return { arValuesVisible };
}

import { useState } from 'react';
import { useWindowWidth } from '../../../../hooks/useWindowWidth';
import { useDashboardContext } from '../DashboardContext/useDashboardContext';

export function useAccounts() {
    const windowWidth = useWindowWidth();
    const { arValuesVisible, toogleValueVisibility } = useDashboardContext();

    const [sliderState, setSliderState] = useState({
        isBeginning: true,
        isEnd: false,
    });

    return { sliderState, setSliderState, windowWidth, arValuesVisible, toogleValueVisibility };
}
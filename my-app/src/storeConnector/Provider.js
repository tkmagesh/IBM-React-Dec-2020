import { useState, useEffect } from 'react';
import StoreContext from './StoreContext';

export const Provider = ({store, children}) => {
    const [stateFlag, setStateFlag] = useState(false);
    useEffect(() => {
        store.subscribe(() => {
            setStateFlag(stateFlag => !stateFlag);
        });
    },[store, setStateFlag]);
    return (
        <StoreContext.Provider value={{store}}>
            {children}
        </StoreContext.Provider>
    );
}

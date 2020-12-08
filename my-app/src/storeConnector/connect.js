import StoreContext from './StoreContext';

export const connect = (mapStateToProps, mapDispatchToProps) => {
    return (Comp) => () => {
        const getMemoizedDispatchers = (() => {
            let dispatchers = null;
            return (mapDispatchToProps, dispatch) => {
                if (!dispatchers)
                    dispatchers = mapDispatchToProps(dispatch);
                return dispatchers;
            }
        })();
        return (
            <StoreContext.Consumer>
                {({store}) => (
                    <Comp 
                        {...mapStateToProps(store.getState())} 
                        { ...getMemoizedDispatchers(mapDispatchToProps, store.dispatch)} 
                    />
                )}
            </StoreContext.Consumer>
        );
    }
};
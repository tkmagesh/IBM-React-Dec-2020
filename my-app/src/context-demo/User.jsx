import UserContext from './UserContext';

const User = ({children}) => {
    return (
        <UserContext.Provider value="Magesh">
            {children}
        </UserContext.Provider>
    )
}

export default User;



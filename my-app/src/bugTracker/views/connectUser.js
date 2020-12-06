import UserContext from '../../context-demo/UserContext'
function connectUser(Comp){
  return function(props){
    return (
      <UserContext.Consumer>
        { userName => (
          <Comp {...props} userName={userName} />
        )}
      </UserContext.Consumer>
    );
  };
}

export default connectUser;
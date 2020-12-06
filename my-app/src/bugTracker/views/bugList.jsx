/* 
import BugItem from './bugItem';
import UserContext from '../../context-demo/UserContext'
const BugList = ({ bugs, toggle, remove, removeClosed }) => {
  return (
    <UserContext.Consumer>
      { userName => (
        <section className="list">
          <div>User Name : {userName}</div>
          <ol>
            {bugs.map(bug => (
              <BugItem key={bug.id} {...{ bug, toggle, remove }} />
            ))}
          </ol>
          <input
            type="button"
            value="Remove Closed"
            onClick={() => removeClosed(bugs)}
          />
        </section>
      )}
    </UserContext.Consumer>
    
  );
};

export default BugList; */

import BugItem from './bugItem';
import connectUser from './connectUser';

const BugList = ({ bugs, toggle, remove, removeClosed, userName }) => {
  return (
        <section className="list">
          <div>User Name : {userName}</div>
          <ol>
            {bugs.map(bug => (
              <BugItem key={bug.id} {...{ bug, toggle, remove }} />
            ))}
          </ol>
          <input
            type="button"
            value="Remove Closed"
            onClick={() => removeClosed(bugs)}
          />
        </section>
      )
};


export default connectUser(BugList);

import BugItem from './bugItem';

const BugList = ({ bugs, toggle, remove, removeClosed }) => {
  return (
    <section className="list">
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
  );
};

export default BugList;
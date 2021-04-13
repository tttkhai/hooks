import React from "react";
import ListItem from './ListItem';

function Expenses({expenses}) {
  return (
    <div>
      <div className="expenses">
        {expenses.length === 0 ? (
          <p>Nothing</p>
        ) : (
          expenses.map((res) => {
            return <ListItem key={res.id} className="hello" {...res} />;
          })
        )}
      </div>
    </div>
  );
}

export default Expenses;

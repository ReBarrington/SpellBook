import React from 'react';
import OpenBook from './OpenBook';
import ClosedBook from './ClosedBook';

function App() {

    let closed = true;

    const isOpening = () => {
        closed = false;
        console.log(closed)
    }

    if (closed === true) {
      return (
          <div className="closed-book" onClick={isOpening}>
              <ClosedBook />
          </div>
        );
    } else if (closed === false) {
      return <OpenBook />
    }

}

export default App;
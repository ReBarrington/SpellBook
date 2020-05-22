import React, { useState } from 'react';
import OpenBook from './OpenBook';
import ClosedBook from './ClosedBook';

function App() {
  let [closed, setClosed] = useState(true)

    const isOpening = () => {
        setClosed(closed => !closed);
        console.log(closed)
    }

    return (
      <div onClick={isOpening}>
        {closed ? <ClosedBook /> : <OpenBook />}
      </div>
    )
}

export default App;
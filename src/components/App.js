import React from 'react';
import Dropdown from './dropdown';

const arrayOfStrings = ['cat', 'dog', 'elephant', 'fox', 'tiger', 'lion'];

function App() {
  return (
    <div className="app">
      <Dropdown dropdownArray={arrayOfStrings} />
    </div>
  );
}

export default App;

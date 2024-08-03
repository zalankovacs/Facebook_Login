import React from 'react';
import './App.css';
import First from './components/first';
import Second from './components/second';


function App() {
  return (
    <>
    <div className='container'>
        <div className='column column-1'>
          <First />
        </div>
        <div className='column column-2'>
          <Second />
        </div>
    </div>
    </>
  );
}

export default App;
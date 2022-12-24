import React from 'react';
import './styles.css';

function Loader() {
  console.log('rendering Loader component')
  return (
    <div className='overlay'>
      <div className='loader'></div>
    </div>
  )
}

export default Loader

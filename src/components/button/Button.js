import React from 'react'

function Button({ ShortlyButton, onClick, name, className, type }) {
  console.log('rendering button component-', name)
  return (
    <ShortlyButton
      onClick={onClick}
      type={type}
    >
      {name}
    </ShortlyButton>
  )
}

export default React.memo(Button)
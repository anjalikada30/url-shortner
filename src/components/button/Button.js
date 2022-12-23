import React from 'react'

function Button({ ShortlyButton, onClick, name, className, type }) {
  return (
    <ShortlyButton
      onClick={onClick}
      type={type}
    >
      {name}
    </ShortlyButton>
  )
}

export default Button
import React from 'react';

function Input({ ShortlyInput, onChange, placeholder, className, value, type, inputRef }) {
    console.log('rendering Input component')
    return (
        <ShortlyInput
            className={className}
            ref={inputRef}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    )
}

export default React.memo(Input);
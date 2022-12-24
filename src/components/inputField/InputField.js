import React, { useRef } from 'react'
import { Button } from '../button';
import { Input } from '../input';
import { ShortlyButton, ShortlyForm, ShortlyInput } from './InputFieldElements';

function InputField({ onSubmit }) {
    console.log('rendering InputField component')
    const inputRef = useRef();
    const onUrlSubmit = (e) => {
        e.preventDefault()
        onSubmit(inputRef.current.value)
        inputRef.current.value = ''
    }
    return (
        <ShortlyForm
            onSubmit={onUrlSubmit}
        >
            <Input
                ShortlyInput={ShortlyInput}
                type='text'
                placeholder='Shorten a link here...'
                inputRef={inputRef}
            />
            <Button
                ShortlyButton={ShortlyButton}
                name='Shorten it!'
                type='submit'
            />
        </ShortlyForm>
    )
}

export default InputField;

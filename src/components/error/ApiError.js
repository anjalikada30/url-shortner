import React from 'react'
import { ErrorContainer } from './ApiErrorElements'

function ApiError({error}) {
  console.log('rendering ApiError component-', error?.message)
  return (
    <ErrorContainer>
      Error! {error?.message}
    </ErrorContainer>
  )
}

export default ApiError

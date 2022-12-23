import React from 'react'
import { ErrorContainer } from './ApiErrorElements'

function ApiError({error}) {
  return (
    <ErrorContainer>
      Error! {error?.message}
    </ErrorContainer>
  )
}

export default ApiError

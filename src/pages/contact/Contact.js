import React from 'react'
import { ButtonMailto } from '../../components';
import { ContactUsContainer, ContactUsElement } from './ContactElements'

function Contact() {
  return (
    <ContactUsContainer>
      <ContactUsElement>
        Contact us at - 
        <ButtonMailto label={"info@tibush.com"} mailto="mailto:info@tibush.com" />
      </ContactUsElement>
    </ContactUsContainer>
  )
}

export default Contact

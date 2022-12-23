import React from 'react';
import logo from '../../assets/shortly.svg';
import { Description, DescriptionContainer, Section1, Section2 } from './DescriptionElements';

function ShortlyDescription() {
  return (
    <DescriptionContainer>
        <Description>
            <Section1>More than just shorter Links</Section1>
            <section>Build your brand's recognition and get detailed insights of how your links are performing</section>
        </Description>
        <img src={logo} height="300px" width="400px" alt='shortly image'/>
    </DescriptionContainer>
  )
}

export default ShortlyDescription

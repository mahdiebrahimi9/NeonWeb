import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>

    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        my personal protfolio
      </SectionTitle>
      <SectionText>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio quae, aut beatae deleniti reprehenderit voluptatibus reiciendis dolor ratione, doloremque amet ipsam quas. Ipsam alias quibusdam veniam quod culpa recusandae sed.
      </SectionText>
      <Button onClick={() => window.location = "https://google.com"}>learn more</Button>

    </LeftSection>
  </Section >
);

export default Hero;
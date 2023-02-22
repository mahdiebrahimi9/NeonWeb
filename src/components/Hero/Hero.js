import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>

    <LeftSection>
      <SectionTitle main center>
        نئون وب
        <br />
        دیجیتال مارکتینگ و طراحی وب سایت
      </SectionTitle>
      <SectionText>
      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز 
      </SectionText>
      <Button onClick={() => window.location = "https://google.com"}>بیشتر بدانید</Button>

    </LeftSection>
  </Section >
);

export default Hero;
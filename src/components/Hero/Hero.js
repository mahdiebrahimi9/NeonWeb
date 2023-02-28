import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>

    <LeftSection>
      <SectionTitle main center>
        نئون وب، ارائه دهنده خدمات
        <br />
        طراحی سایت، طراحی فروشگاه اینترنتی و ساخت اپلیکیشن
      </SectionTitle>
      <SectionText>

نئون وب با بیش از 5 سال سابقه فعالیت در زمینه طراحی سایت و اپلیکیشن های موبایل و تکمیل بیش از 500 پروژه در طول سال های فعالیت خود، اکنون بروزترین متدها و تکنیک های طراحی سایت و برنامه نویسی را در اختیار دارد و آماده طراحی برترین وب سایت ها و اپلیکیشن های موبایل برای مشتریان خود می باشد.
      </SectionText>
      <Button onClick={() => window.location = "https://google.com"}>بیشتر بدانید</Button>

    </LeftSection>
  </Section >
);

export default Hero;
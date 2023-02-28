import React from 'react';
import { DiFirebase, DiReact, DiJsBadge, DiNodejs , DiPhp } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id='tech'>
    <SectionDivider />
    <br />
    <SectionTitle>استفاده از بهترین تکنولوژی های روز دنیا </SectionTitle>
    <SectionText>
    مهم‌ترین ویژگی متمایزکننده نئون وب نسبت به سایر رقبا در طراحی وب‌سایت، بهره‌گیری از جدیدترین متد و فناوری روز دنیا و به‌کار بردن دانش برنامه‌نویسی و خلاقیت برای خدمات طراحی وب و پورتال به شکلی نو و منحصربه‌فرد است.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="4rem" />
        <ListContainer>
          <ListTitle>  Front-End </ListTitle>
          <ListParagraph>EXPRINCEV with <br />
            react.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiNodejs size="4rem" />
        <ListContainer>
          <ListTitle> Back-End </ListTitle>
          <ListParagraph>EXPRINCEV with <br />
            Node.js and Database
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiJsBadge size="4rem" />
        <ListContainer>
          <ListTitle>  UI/UX </ListTitle>
          <ListParagraph>EXPRINCEV with <br />
            Tools like Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;

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
      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>  Front-End </ListTitle>
          <ListParagraph>EXPRINCEV with <br />
            react.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiPhp size="3rem" />
        <ListContainer>
          <ListTitle> Back-End </ListTitle>
          <ListParagraph>EXPRINCEV with <br />
            Node.js and Database
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiJsBadge size="3rem" />
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

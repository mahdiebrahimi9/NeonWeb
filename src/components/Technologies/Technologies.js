import React from 'react';
import { DiFirebase, DiReact, DiJsBadge, DiNodejs } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id='tech'>
    <SectionDivider />
    <br />
    <SectionTitle>Techonologest</SectionTitle>
    <SectionText>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora perspiciatis nihil illum dolorem cumque animi doloribus nemo deserunt fuga, neque, velit reiciendis quaerat magnam fugiat. Reiciendis qui natus repudiandae corporis?
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
        <DiNodejs size="3rem" />
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

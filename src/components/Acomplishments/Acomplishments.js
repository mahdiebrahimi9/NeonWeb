import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 20, text: ' پروژه های متن باز' },
  { number: 160, text: 'پروژه انجام شده', },
  { number: 10 , text: 'تعداد جوایز', },
  { number: 7 , text: '  بیش از 7 سال سابقه', }
];

const Acomplishments = () => (
  <Section>
      <SectionDivider />
      <br />
    <SectionTitle>دستاورد های ما</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;

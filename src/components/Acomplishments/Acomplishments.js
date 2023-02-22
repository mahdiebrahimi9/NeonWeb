import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 20, text: 'لورم ایپسوم' },
  { number: 1000, text: 'لورم ایپسوم', },
  { number: 1900, text: 'لورم ایپسوم', },
  { number: 5000, text: 'لورم ایپسوم', }
];

const Acomplishments = () => (
  <Section>
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

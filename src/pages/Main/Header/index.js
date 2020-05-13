import React from 'react';
import { IconSide, Container, CurrentLocation,CurrentText,IconCart } from './styles';

export default function HeaderMain() {
  return (
    <Container>
      <IconSide name="gps-fixed" size={22} color="#f5f5f5" />
      <CurrentLocation>
        <CurrentText>Antônio Martins</CurrentText>
      </CurrentLocation>
      <IconCart name="shopping-bag"/>
    </Container>
  );
}

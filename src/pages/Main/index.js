import React from 'react';
import { Container,Welcome,WelcomeText,HungerText } from './styles';
import HeaderMain from '~/pages/Main/Header';
export default function Main() {
  return (
    <Container>
      <HeaderMain />
      <Welcome>
        <WelcomeText>Olá, Helton</WelcomeText>
        <HungerText>O que deseja comer hoje?</HungerText>
      </Welcome>
    </Container>
  );
}

import React from 'react';
import { Container } from './styles';

export default function Bag({ navigation }) {
  const products = navigation.getParam('products', []);

  return (
    <Container>
    </Container>
  );
}

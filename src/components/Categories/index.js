import React from 'react';
import {
  Container,
  CategoryContainer,
  TabItem,
  ImageIcon,
  Title,
  TabItemContainer,
  CategoryText,
} from './styles';

import burguer from '~/assets/burger.png';
import prato from '~/assets/prato.png';
import pizza from '~/assets/pizza.png';
import alcool from '~/assets/alcool.png';
import porcoes from '~/assets/porcoes.png';
import doces from '~/assets/doces.png';

export default function Categories() {
  return (
    <Container>
      <Title>Categorias</Title>
      <CategoryContainer>
        <TabItemContainer>
          <TabItem>
            <ImageIcon source={pizza} />
          </TabItem>
          <CategoryText>Pizzas</CategoryText>
        </TabItemContainer>

        <TabItemContainer>
          <TabItem>
            <ImageIcon source={burguer} />
          </TabItem>
          <CategoryText>Lanches</CategoryText>
        </TabItemContainer>

        <TabItemContainer>
          <TabItem>
            <ImageIcon source={alcool} />
          </TabItem>
          <CategoryText>Bebidas</CategoryText>
        </TabItemContainer>

        <TabItemContainer>
          <TabItem>
            <ImageIcon source={porcoes} />
          </TabItem>
          <CategoryText>Porções</CategoryText>
        </TabItemContainer>

        <TabItemContainer>
          <TabItem>
            <ImageIcon source={doces} />
          </TabItem>
          <CategoryText>Doces</CategoryText>
        </TabItemContainer>

        <TabItemContainer style={{ paddingRight: 10 }}>
          <TabItem>
            <ImageIcon source={prato} />
          </TabItem>
          <CategoryText>Almoços</CategoryText>
        </TabItemContainer>
      </CategoryContainer>
    </Container>
  );
}

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
import pizza from '~/assets/pizza.png';
import alcool from '~/assets/alcool.png';
import porcoes from '~/assets/porcoes.png';
import doces from '~/assets/doces.png';

export default function Categories() {
  return (
    <Container>
      <Title>Categorias</Title>
      <CategoryContainer>
        <TabItemContainer style={{ paddingLeft: 9 }}>
          <TabItem>
            <ImageIcon source={pizza} />
            <CategoryText>Pizzas</CategoryText>
          </TabItem>
        </TabItemContainer>

        <TabItemContainer>
          <TabItem>
            <ImageIcon source={burguer} />
            <CategoryText>Lanches</CategoryText>
          </TabItem>

        </TabItemContainer>

        <TabItemContainer>
          <TabItem>
            <ImageIcon source={alcool} />
            <CategoryText>Bebidas</CategoryText>
          </TabItem>

        </TabItemContainer>

        <TabItemContainer>
          <TabItem>
            <ImageIcon source={porcoes} />
            <CategoryText>Porções</CategoryText>
          </TabItem>

        </TabItemContainer>

        <TabItemContainer style={{ paddingRight: 10 }}>
          <TabItem>
            <ImageIcon source={doces} />
            <CategoryText>Doces</CategoryText>
          </TabItem>

        </TabItemContainer>

      </CategoryContainer>
    </Container>
  );
}

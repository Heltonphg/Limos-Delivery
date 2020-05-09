import React from 'react';
import {
  Container,
  CategoryContainer,
  TabItem,
  ImageIcon,
  TextIcon,
  Title,
  TabItemContainer,
} from './styles';

import burguer from '~/assets/burger.png';
import prato from '~/assets/prato.png';
import pizza from '~/assets/pizza.png';
import alcool from '~/assets/alcool.png';
import porcoes from '~/assets/porcoes.png';

export default function Categories() {
  return (
    <Container>
      <Title>Categorias</Title>
      <CategoryContainer>
        <TabItemContainer>
          <TabItem>
            <ImageIcon source={pizza} />
          </TabItem>
        </TabItemContainer>

        <TabItemContainer>
          <TabItem>
            <ImageIcon source={burguer} />
          </TabItem>
        </TabItemContainer>

        <TabItemContainer>
          <TabItem>
            <ImageIcon source={alcool} />
          </TabItem>
        </TabItemContainer>

        <TabItemContainer>
          <TabItem>
            <ImageIcon source={porcoes} />
          </TabItem>
        </TabItemContainer>

        <TabItemContainer style={{ paddingRight: 10 }}>
          <TabItem>
            <ImageIcon source={prato} />
          </TabItem>
        </TabItemContainer>
      </CategoryContainer>
    </Container>
  );
}

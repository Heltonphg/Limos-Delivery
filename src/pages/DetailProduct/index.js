import React, { useState, useEffect } from 'react';
import {
  Container,
  ContainerImg,
  Imagem,
  BackButton,
  Icons,
  ContainerInfos,
  Title,
  First,
  ContainerSelect,
  Quantity,
  ScrollItems,
  Item
} from './styles';
import { colors } from '~/styles';

export default function DetailProduct({ navigation }) {
  const product = navigation.getParam('product', null);
  const [quantity, setQuantity] = useState(1);

  useEffect(()=>{
    if(quantity <=0){
      setQuantity(1);
    }
  },[quantity])

  function handleAdd(type) {
    if (type === 'add') {
      setQuantity(quantity + 1);
    } else {
      setQuantity(quantity - 1);
    }

  }

  return (
    <Container>
      <ContainerImg
        style={!product.image && { backgroundColor: colors.secondary }}>
        <Imagem
          resizeMode={product.image ? 'stretch' : 'contain'}
          source={
            product.image
              ? { uri: product.img }
              : { uri: product.category.image_default_product }
          }>
          <BackButton onPress={() => navigation.goBack()}>
            <Icons
              name="arrow-back"
              size={26}
              color={!product.image ? colors.whiter : colors.secondary}
            />
          </BackButton>
        </Imagem>
      </ContainerImg>
      <ContainerInfos>
        <First>
          <Title>{product.name}</Title>
          <ContainerSelect>
            <Icons
              onPress={() => handleAdd('remove')}
              name="remove"
              size={30}
              color={colors.secondary}
            />
            <Quantity>{quantity}</Quantity>
            <Icons
              onPress={() => handleAdd('add')}
              name="add"
              size={30}
              color={colors.secondary}
            />
          </ContainerSelect>
        </First>
        <ScrollItems>
          <Item/>
          <Item/>
          <Item/>
        </ScrollItems>
      </ContainerInfos>
    </Container>
  );
}

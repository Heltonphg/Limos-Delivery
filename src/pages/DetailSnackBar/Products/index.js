import React from 'react';
import IonIcon from "react-native-vector-icons/Ionicons";
import {colors} from "~/styles";
import Icon from "react-native-vector-icons/MaterialIcons";

import {
  BaseText,
  Acompanha,
  ContainerSelect,
  ProductImg,
  StarText,
  Title,
  ButtonProduct,
  ContainerImg,
  ContainerInfoProduct,
  Description,
  InfoTitleDescription,
  ProductContainer,
  Stars,
  Preco
} from './styles';

export default function ProductList({ item }) {
  return (
    <ProductContainer>
      <ContainerImg>
        <ProductImg resizeMode = {item.image ? 'stretch': 'contain'} source ={item.image ?{uri: item.img } : {uri: item.category.image_default_product}} />
        <Stars>
          <StarText>{item.avaliation ? item.avaliation : '...'}</StarText>
          <IonIcon
            style={{ marginBottom: 3 }}
            name="ios-star"
            size={12}
            color={colors.terciary}
          />
        </Stars>
      </ContainerImg>

      <ContainerInfoProduct>
        <InfoTitleDescription>
          <Title>{item.name}</Title>
          <BaseText>descrição: </BaseText>
          <Description numberOfLines={2}>{item.description ? item.description:  'Sem descrição'}</Description>
          <BaseText>Acompanhamento: </BaseText>
          <Acompanha>{item.acompanhamento ? item.acompanhamento : 'Sem acompanhamento'}</Acompanha>
        </InfoTitleDescription>
        <ContainerSelect>
          <ButtonProduct>
            <Icon
              style={{ marginBottom: 3 }}
              name="favorite-border"
              size={25}
              color={colors.whiter}
            />

          </ButtonProduct>
          <Preco>R${item.preco}</Preco>

          <ButtonProduct>
            <Icon
              style={{ marginBottom: 3 }}
              name="add-shopping-cart"
              size={25}
              color={colors.whiter}
            />
          </ButtonProduct>
        </ContainerSelect>
      </ContainerInfoProduct>
    </ProductContainer>
  );
}

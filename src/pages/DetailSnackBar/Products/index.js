import React, { useEffect, useState } from 'react';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { colors } from '~/styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigation } from 'react-navigation';

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
  Preco,
} from './styles';
import { bagActions } from '~/store/ducks/bag';
import { useDispatch } from 'react-redux';

function ProductList({ item, navigation }) {
  const dispatch = useDispatch();
  const [sizes, setSizes] = useState([]);
  useEffect(() => {
    const s = item.product_sizes && item.product_sizes.map((e) => e.price);
    setSizes(s);
  }, []);

  function handleAddToBag() {
    if (item.product_sizes.length > 0) {
      navigation.navigate('DetailProduct', {
        product: item,
      })
    } else {
      const product_to_bag = {
        product_id: item.id,
        quantity: 1,
        price: item.price,
        size: null,
        preco_original: item.price,
        snack_bar_id: item.snack_bar_id
      };
      dispatch(bagActions.create_product_request(product_to_bag));
    }
  }

  return (
    <ProductContainer
      onPress={() =>
        navigation.navigate('DetailProduct', {
          product: item,
        })
      }>
      <ContainerImg>
        <ProductImg
          resizeMode={item.image ? 'stretch' : 'contain'}
          source={
            item.image
              ? { uri: item.img }
              : { uri: item.category && item.category.image_default_product }
          }
        />
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
          <Description numberOfLines={3}>
            {item.description ? item.description : 'Sem descrição'}
          </Description>
          <BaseText>Acompanha: </BaseText>
          <Acompanha>
            {item.acompanhamento ? item.acompanhamento : 'Sem acompanhamento'}
          </Acompanha>
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
          <Preco
            style={
              item.product_sizes &&
              item.product_sizes.length > 0 && { fontSize: 16 }
            }>
            {item.product_sizes && item.product_sizes.length > 0
              ? `a partir de R$${parseFloat(Math.min(...sizes)).toFixed(2)}`
              : `R$ ${parseFloat(item.price).toFixed(2)}`}
          </Preco>

          <ButtonProduct onPress={() => handleAddToBag()}>
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

export default withNavigation(ProductList);

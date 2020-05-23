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
  Item,
  ContainerDetails,
  ContainerText,
  BaseText,
  SelectSize,
  TextSelect,
  FlatSizes,
  ContainerSize,
  TextSelectSize,
  Infos
} from './styles';
import { colors } from '~/styles';
import Icon from 'react-native-vector-icons/Ionicons';

export default function DetailProduct({ navigation }) {
  const product = navigation.getParam('product', null);
  //states
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(
    product.product_sizes.length > 0
      ? product.product_sizes[0]
      : { preco: product.preco },
  );
  const [priceOfBuy, setPriceOfBuy] = useState(price.preco);

  useEffect(() => {
    if (quantity <= 0) {
      setQuantity(1);
    }
  }, [quantity]);

  useEffect(() => {
    setPriceOfBuy(price.preco * quantity);
  }, [quantity, price]);

  useEffect(() => {
    setQuantity(1);
  }, [price]);

  function handleSelectSize(size) {
    setPrice(size);
  }

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
          <Icons
            style={{ marginBottom: 3 }}
            name="favorite-border"
            size={25}
            color={colors.white}
          />
        </Imagem>
      </ContainerImg>
      <ContainerInfos>
        <First>
          <ContainerText>
            <Title>{product.name}</Title>
          </ContainerText>

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
        <ContainerDetails>
          <ScrollItems>
            <Item>
              <BaseText>R$ {parseFloat(priceOfBuy).toFixed(2)}</BaseText>
            </Item>
            <Item>
              <BaseText>
                {product.avaliation ? product.avaliation : '...'}
              </BaseText>
              <Icon
                style={{ marginBottom: 3 }}
                name="ios-star"
                size={14}
                color={colors.terciary}
              />
            </Item>
            <Item>
              <BaseText>
                {product.time_preparation ? product.time_preparation : '...'}
              </BaseText>
              <Icon
                style={{ marginBottom: 2 }}
                name="md-time"
                size={15}
                color={colors.terciary}
              />
            </Item>
          </ScrollItems>
        </ContainerDetails>
      </ContainerInfos>
      {product.product_sizes.length > 0 && (
        <SelectSize>
          <TextSelect>Selecione o Tamanho:</TextSelect>
          <FlatSizes
            data={product.product_sizes}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <ContainerSize
                style={
                  item.id === price.id && {
                    borderWidth: 2,
                    borderColor: colors.secondary,
                  }
                }
                onPress={() => handleSelectSize(item)}>
                <TextSelectSize>{item.size}</TextSelectSize>
              </ContainerSize>
            )}
          />
        </SelectSize>
      )}
    </Container>
  );
}

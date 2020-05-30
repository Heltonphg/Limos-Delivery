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
  TextSub,
  FlatSizes,
  ContainerSize,
  TextSelectSize,
  Infos,
  TextSubDesc,
  Descri,
  Finaly,
  TextButtonFinaly,
  ButtonFinaly,
} from './styles';
import { colors } from '~/styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { bagActions } from '~/store/ducks/bag';
import { BallIndicator } from 'react-native-indicators';

export default function DetailProduct({ navigation }) {
  const dispatch = useDispatch();
  const product = navigation.getParam('product', null);

  //states
  const loading_create = useSelector((state) => state.bag.loading_create);

  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(
    product.product_sizes.length > 0
      ? product.product_sizes[0]
      : { price: product.price },
  );

  const [priceOfBuy, setPriceOfBuy] = useState(price.price);

  useEffect(() => {
    if (quantity <= 0) {
      setQuantity(1);
    }
  }, [quantity]);

  useEffect(() => {
    setPriceOfBuy(price.price * quantity);
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

  function handleAddToBag() {
    const product_to_bag = {
      product_id: product.id,
      quantity,
      price: priceOfBuy,
      size: product.product_sizes.length > 0 ? price.size : null,
      preco_original:
        product.product_sizes.length > 0 ? price.price : product.price,
      snack_bar_id: product.snack_bar_id,
    };
    dispatch(bagActions.create_product_request(product_to_bag));
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
              color={!product.image ? colors.whiter : colors.white}
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
          <TextSub>Selecione o Tamanho:</TextSub>
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
      <Infos
        style={
          product.product_sizes.length > 0
            ? { flex: 0.3, paddingTop: 2 }
            : { flex: 0.41 }
        }>
        <TextSubDesc>Descrição:</TextSubDesc>
        <Descri>{product.description}</Descri>
        <TextSubDesc style={{ marginTop: 3 }}>Acompanha:</TextSubDesc>
        <Descri>
          {product.acompanhamento
            ? product.acompanhamento
            : 'Sem acompanhamento'}
        </Descri>
      </Infos>
      <Finaly>
        <ButtonFinaly onPress={() => handleAddToBag()}>
            <TextButtonFinaly>
              Adicionar - R$ {parseFloat(priceOfBuy).toFixed(2)}
            </TextButtonFinaly>
        </ButtonFinaly>
      </Finaly>
    </Container>
  );
}

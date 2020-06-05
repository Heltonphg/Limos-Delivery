import React from 'react';
import {
  Container,
  ProductInfo,
  ImageContainer,
  ProductImg,
  ProductName,
  ProductDescription,
  Firt,
  Second,
  Price,
  Button,
  TextQuantity,
} from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

import { colors } from '~/styles';
import { useDispatch } from 'react-redux';
import { bagActions } from '~/store/ducks/bag';

export default function ({ product_bag }) {
  const dispatch = useDispatch();
  const { product } = product_bag;

  function handleUpdateProductBag(add) {
    const { id, quantity, preco_original, price } = product_bag;
    dispatch(
      bagActions.update_product_request(
        id,
        quantity,
        preco_original,
        price,
        add,
      ),
    );
  }

  return (
    <Container>
      <ImageContainer>
        <ProductImg
          resizeMode={product.image ? 'stretch' : 'contain'}
          source={
            product.image
              ? { uri: product.img }
              : {
                  uri:
                    product.category && product.category.image_default_product,
                }
          }
        />
      </ImageContainer>
      <ProductInfo>
        <Firt>
          <ProductName>
            {product.name}
            {product_bag.size && ` (${product_bag.size})`}
          </ProductName>
          <ProductDescription numberOfLines={2}>
            {product.description}
          </ProductDescription>
          <Price>
            {product_bag.quantity}x | R$
            {parseFloat(product_bag.preco_original).toFixed(2)}
          </Price>
        </Firt>
        <Second>
          <Button
            onPress={() => handleUpdateProductBag(true)}
            style={{ marginBottom: 5 }}>
            <Icon name="md-add" size={20} color={colors.whiter} />
          </Button>
          <TextQuantity>{product_bag.quantity}</TextQuantity>
          <Button
            onPress={() => handleUpdateProductBag(false)}
            style={{ marginTop: 5 }}>
            <Icon name="md-remove" size={20} color={colors.whiter} />
          </Button>
        </Second>
      </ProductInfo>
    </Container>
  );
}

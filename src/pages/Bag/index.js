import React, { useMemo } from 'react';
import {
  Container,
  Body,
  Footer,
  PaymentText,
  PaymentButton,
  PaymentButtonText,
  FlatProducts,
  RefreshControl,
} from './styles';
import Header from '~/components/Header';
import Product from './Product';
import { useDispatch, useSelector } from 'react-redux';
import { colors } from '~/styles';
import { bagActions } from '~/store/ducks/bag';

export default function Bag({ navigation }) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.bag.products, []);

  const loadingBag = useSelector((state) => state.bag.loading);

  function onLoadingBag() {
    dispatch(bagActions.load_bag_request());
  }

  const priceCalcTot = (products) => {
    let price = 0;
    for (const product of products) {
      price += product.price;
    }
    return price;
  };

  const price = useMemo(() => priceCalcTot(products), [products]);

  return (
    <Container>
      <Header title={'Sacola'} buttonBack={true} />
      <Body
        style={
          !products.length > 0 && {
            justifyContent: 'center',
            alignItems: 'center',
          }
        }>
        {products.length > 0 ? (
          <FlatProducts
            data={products}
            keyExtractor={(product) => String(product.id)}
            refreshControl={
              <RefreshControl
                refreshing={loadingBag}
                tintColor="#fff"
                titleColor="#fff"
                colors={[colors.secondary]}
                title={'Atualizando sacola...'}
                onRefresh={onLoadingBag}
              />
            }
            renderItem={({ item }) => <Product product_bag={item} />}
          />
        ) : (
          <PaymentText>Nenhum item na sacola</PaymentText>
        )}
      </Body>
      <Footer>
        <PaymentText>
          {products.length} itens - R$ {parseFloat(price).toFixed(2)}
        </PaymentText>
        <PaymentButton>
          <PaymentButtonText>Iniciar Pedido</PaymentButtonText>
        </PaymentButton>
      </Footer>
    </Container>
  );
}

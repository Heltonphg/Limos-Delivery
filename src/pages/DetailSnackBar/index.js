import React, { useEffect } from 'react';
import { PacmanIndicator } from 'react-native-indicators';
import ProductList from './Products';
import {
  BackButton,
  Background,
  BodyHeader,
  Container,
  ContentLogo,
  CotainerName,
  Cover,
  Details,
  Header,
  ImgContainer,
  Info,
  InfoContainer,
  InfoTitle,
  Name,
  Options,
  SnackDetails,
  ListContainer,
  Space,
  Empty,
  EmptyText,
  ScrollDetails,
} from './styles';

import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';

import { useDispatch, useSelector } from 'react-redux';
import { colors } from '~/styles';

import Categories from '~/components/Categories';
import { ProductActions } from '~/store/ducks/products';
import { AppActions } from '~/store/ducks/app';

export default function DetailSnackBar({ navigation }) {
  const snack_id = navigation.getParam('snack_id', '');

  const dispatch = useDispatch();

  const snackbar = useSelector((state) => state.snackBar.snack);
  const loading = useSelector((state) => state.snackBar.loadingDetail);
  let currentCategory = useSelector((state) => state.categories.current);
  const products = useSelector((state) => state.products.products);
  const loadproducts = useSelector((state) => state.products.loading);

  useEffect(() => {
    handleProducts();
  }, [currentCategory]);

  useEffect(() => {
    handleProducts();
  }, []);

  function handleProducts() {
    if (!currentCategory) {
      currentCategory = { id: '' };
    }
    dispatch(ProductActions.productRequest(snack_id, currentCategory.id));
  }

  return (
    <Container>
      <Header>
        <ShimmerPlaceHolder
          style={{
            width: '100%',
            height: '99%',
            borderBottomRightRadius: 6,
            borderBottomLeftRadius: 6,
          }}
          autoRun={true}
          visible={!loading}>
          <SnackDetails>
            <ImgContainer
              style={{
                borderBottomRightRadius: 6,
                borderBottomLeftRadius: 6,
                overflow: 'hidden',
              }}>
              <Background
                style={{ overflow: 'hidden' }}
                source={{ uri: snackbar && snackbar.logoimg }}
                blurRadius={0.4}>
                <Options>
                  <BackButton onPress={() => navigation.goBack()}>
                    <Icon
                      name="arrow-back"
                      size={26}
                      color={colors.secondary}
                    />
                  </BackButton>
                  <Icon name="more-horiz" size={33} color={colors.secondary} />
                </Options>
              </Background>
            </ImgContainer>
            <ContentLogo>
              <Cover source={{ uri: snackbar && snackbar.logoimg }} />
              <Info
                style={
                  snackbar && snackbar.is_open
                    ? { color: colors.alertSucess }
                    : { color: colors.alertError }
                }>
                {snackbar && snackbar.is_open ? 'Aberto' : 'Fechado'}
              </Info>
            </ContentLogo>
          </SnackDetails>
        </ShimmerPlaceHolder>
      </Header>
      <BodyHeader>
        <ShimmerPlaceHolder
          style={{
            width: '100%',
            height: 25,
            paddingTop: 4,
          }}
          autoRun={true}
          visible={!loading}>
          <CotainerName>
            <Name>{snackbar && snackbar.name}</Name>
          </CotainerName>
        </ShimmerPlaceHolder>
        <ShimmerPlaceHolder
          style={{
            width: '100%',
            height: 30,
            marginTop: 10,
            alignItems: 'center',
            justfyContent: 'center',
          }}
          autoRun={true}
          visible={!loading}>
          <ScrollDetails>
            <Details>
              <InfoContainer>
                <Space>
                  <InfoTitle>Local</InfoTitle>
                </Space>
                <Info>
                  {snackbar &&
                    snackbar.snack_address &&
                    snackbar.snack_address.city}
                </Info>
              </InfoContainer>
              <InfoContainer
                onPress={() => {
                  const payments = snackbar.payment.split(',');
                  dispatch(
                    AppActions.openModalInfo(
                      'Formas de Pagamento',
                      [...payments],
                      [],
                      [],
                    ),
                  );
                }}>
                <Space>
                  <InfoTitle>Pagamentos</InfoTitle>
                  <IonIcon
                    name="ios-arrow-down"
                    size={13}
                    color={colors.secondary}
                  />
                </Space>
                <IonIcon name="md-cash" size={21} color={colors.secondary} />
              </InfoContainer>
              <InfoContainer>
                <Space>
                  <InfoTitle>Frete Entrega</InfoTitle>
                  <IonIcon
                    name="ios-arrow-down"
                    size={13}
                    color={colors.secondary}
                  />
                </Space>

                <Icon name="motorcycle" size={21} color={colors.secondary} />
              </InfoContainer>
              <InfoContainer>
                <InfoTitle>Valor Mínimo</InfoTitle>
                <Info>R$ 6.00</Info>
              </InfoContainer>
              <InfoContainer>
                <InfoTitle>Tempo Médio</InfoTitle>
                <Info>
                  {snackbar && snackbar.min_max_time_delivery
                    ? snackbar.min_max_time_delivery
                    : '...'}
                </Info>
              </InfoContainer>
            </Details>
          </ScrollDetails>
        </ShimmerPlaceHolder>
        <Categories />
      </BodyHeader>
      <ListContainer>
        {loadproducts ? (
          <PacmanIndicator color={colors.secondary} size={60} />
        ) : products.length > 0 ? (
          <Carousel
            layoutCardOffset={18}
            data={products}
            layout="default"
            renderItem={({ item }) => <ProductList item={item} />}
            sliderWidth={390}
            itemWidth={220}
          />
        ) : (
          <Empty>
            <Icon name="mood-bad" size={34} color={colors.secondary} />
            <EmptyText>Nenhum produto</EmptyText>
          </Empty>
        )}
      </ListContainer>
    </Container>
  );
}

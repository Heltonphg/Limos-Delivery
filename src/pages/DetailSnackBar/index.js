import React, { useEffect } from 'react';
import { PacmanIndicator } from 'react-native-indicators';
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
  ProductContainer,
  Title,
  ProductImg,
  Description,
  ContainerInfoProduct,
  Stars,
  StarText
} from './styles';

import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';


import { useDispatch, useSelector } from 'react-redux';
import { colors } from '~/styles';

import Categories from '~/components/Categories';
import { ProductActions } from '~/store/ducks/products';

export default function DetailSnackBar({ navigation }) {
  const snack_id = navigation.getParam('snack_id', '');

  const dispatch = useDispatch();

  const snackbar = useSelector((state) => state.snackBar.snack);
  const loading = useSelector((state) => state.snackBar.loadingDetail);
  let current = useSelector((state) => state.categories.current);
  const products = useSelector((state) => state.products.products);
  const loadproducts = useSelector((state) => state.products.loading);

  useEffect(() => {
    handleProducts();
  }, [current]);

  useEffect(() => {
    handleProducts();
  }, []);

  function handleProducts() {
    if (!current) {
      current = { id: '' };
    }
    dispatch(ProductActions.productRequest(snack_id, current.id));
  }

  function renderItem({item, index}){
    return (
      <ProductContainer>
        <ProductImg
        source ={{uri: item.img}}
        />
        <Stars>
          <StarText>{item.avaliation ? item.avaliation : '...'}</StarText>
          <IonIcon style={{marginBottom: 3}} name="ios-star" size={12} color={colors.secondary} />
        </Stars>
        <ContainerInfoProduct>
          <Title>{item.name}</Title>
          <Description>{item.description}</Description>
        </ContainerInfoProduct>
      </ProductContainer>
    );
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
          <Details>
            <InfoContainer>
              <InfoTitle>Cidade</InfoTitle>
              <Info>
                {snackbar &&
                  snackbar.snack_address &&
                  snackbar.snack_address.city}
              </Info>
            </InfoContainer>
            <InfoContainer>
              <InfoTitle>Pagamento</InfoTitle>
              <Info>{snackbar && snackbar.payment}</Info>
            </InfoContainer>
            <InfoContainer>
              <InfoTitle>Mínimo</InfoTitle>
              <Info>R$10</Info>
            </InfoContainer>
            <InfoContainer>
              <InfoTitle>Tempo</InfoTitle>
              <Info>{snackbar && snackbar.min_max_time_delivery}</Info>
            </InfoContainer>
          </Details>
        </ShimmerPlaceHolder>
        <Categories />
      </BodyHeader>
      <ListContainer>
        {loadproducts ? (
          <PacmanIndicator color={colors.secondary} size={60} />
        ) : (
          <Carousel
            layoutCardOffset={18}
            data={products}
            layout="default"
            renderItem={renderItem}
            sliderWidth={390}
            itemWidth={220}
          />
        )}
      </ListContainer>
    </Container>
  );
}

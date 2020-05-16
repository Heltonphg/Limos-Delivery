import React from 'react';
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
} from './styles';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { useSelector } from 'react-redux';
import { colors } from '~/styles';

import Categories from '~/components/Categories';

export default function DetailSnackBar({ navigation }) {
  const snackbar = useSelector((state) => state.snackBar.snack);
  const loading = useSelector((state) => state.snackBar.loadingDetail);

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
              <Info>{JSON.stringify(loading)}</Info>
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

      </ListContainer>
    </Container>
  );
}

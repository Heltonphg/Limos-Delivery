import React from 'react';
import {
  Container,
  SnackDetails,
  Background,
  BackButton,
  Cover,
  SnackTitle,
  ContentLogo,
  Name,
  Header,
  Content,
  Body
} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';
import Categories from "~/pages/Main/Categories";
import {colors} from "~/styles";

export default function DetailSnackBar({ navigation }) {
  const snackbar = useSelector((state) => state.snackBar.snack);
  const loading = useSelector((state) => state.snackBar.loadingDetail);
  return (
    <Container>
      <Header>
        <SnackDetails>
          <Background source={{ uri: snackbar && snackbar.logo }} blurRadius={1} />
          <BackButton onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={24} color={colors.white} />
          </BackButton>

          <ContentLogo>
            <Cover source={{ uri:  snackbar && snackbar.logo }} />
            <SnackTitle>Fecha as 21:00</SnackTitle>
          </ContentLogo>
        </SnackDetails>
      </Header>
      <Body>
        <Name>{ snackbar && snackbar.name}</Name>
        <Categories/>
      </Body>
    </Container>
  );
}

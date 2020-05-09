import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  Title,
  Container,
  Background,
  Content,
  Avaliation,
  AvaliationText,
  FechamentoText
} from './styles';
import {colors} from "~/styles";

export default function SnackBar({ navigation, snack }) {
  return (
    <Container
      style={{
        overflow: 'hidden',
      }}>
      <Background
        style={{
          borderBottomLeftRadius: 6,
          borderBottomRightRadius: 6,
          overflow: 'hidden',
        }}
        source={{ uri: snack.logo }}>

      </Background>
      <Content>
        <Title>{snack.name}</Title>
        <Avaliation>
          <AvaliationText>{snack.geral_avaliation}</AvaliationText>
          <Icon name="ios-star" size={12} color ={colors.whiter}/>
        </Avaliation>
      </Content>
      <FechamentoText>Fecha as 23:00</FechamentoText>
    </Container>
  );
}

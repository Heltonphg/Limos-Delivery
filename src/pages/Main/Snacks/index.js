import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  Title,
  Container,
  Background,
  Content,
  Avaliation,
  AvaliationText,
  FechamentoText,
  Action,
  ContentText,
} from './styles';
import { colors } from '~/styles';
import { SnackBarActions } from '~/store/ducks/snackbar';
import { useDispatch } from 'react-redux';

export default function SnackBar({ navigation, snack }) {
  const dispatch = useDispatch();

  async function detailSnackBar(id) {
    navigation.navigate('DetailSnackBar', {
      snack_id: id,
    });
    dispatch(SnackBarActions.detailSnackRequest(id));
  }

  return (
    <Action onPress={() => detailSnackBar(snack.id)}>
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
          source={{ uri: snack.logoimg }}>
          <Avaliation>
            <AvaliationText>
              {snack.geral_avaliation ? snack.geral_avaliation : '...'}
            </AvaliationText>
            <Icon name="ios-star" size={12} color={colors.whiter} />
          </Avaliation>
        </Background>
        <Content>
          <ContentText>
            <Title numberOfLines={1}>{snack.name}</Title>
          </ContentText>
        </Content>
        <FechamentoText>Fecha as 23:00</FechamentoText>
      </Container>
    </Action>
  );
}

import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';

import io from 'socket.io-client';
import {
  Container,
  Welcome,
  WelcomeText,
  HungerText,
  FlatSnacks,
  Title,
  ContainerList,
} from './styles';
import HeaderMain from '~/pages/Main/Header';
import SnackBar from '~/pages/Main/Snacks';

import { useDispatch, useSelector } from 'react-redux';
import { SnackBarActions } from '~/store/ducks/snackbar';
import { colors } from '~/styles';

export default function Main({ navigation }) {
  const snacks = useSelector((state) => state.snackBar.snackbars);
  const loading = useSelector((state) => state.snackBar.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    registerToSocket();
    snackbarsLoad();
  }, []);

  function registerToSocket() {
    const socket = io('http://10.0.0.107:3333');
    socket.on('snack', (newSnack) => {
      dispatch(SnackBarActions.alterarSnack(newSnack));
    });
  }

  function snackbarsLoad() {
    dispatch(SnackBarActions.snackbarsRequest());
  }

  return (
    <Container>
      <HeaderMain />
      <Welcome>
        <WelcomeText>Olá, Helton</WelcomeText>
        <HungerText>O que deseja comer hoje?</HungerText>
      </Welcome>

      <Title>Lanchonetes abertas</Title>
      <ContainerList>
        <FlatSnacks
          keyboardShouldPersistTabs="handled"
          data={snacks}
          keyExtractor={(snack) => String(snack.id)}
          renderItem={({ item }) => (
            <SnackBar navigation={navigation} snack={item} />
          )}
        />
      </ContainerList>
      <Title>Lanchonetes fechadas</Title>

      <ContainerList>
        {loading ? (
          <ActivityIndicator size="large" color={colors.secondary} />
        ) : (
          <FlatSnacks
            keyboardShouldPersistTabs="handled"
            data={snacks}
            keyExtractor={(snack) => String(snack.id)}
            renderItem={({ item }) => (
              <SnackBar navigation={navigation} snack={item} />
            )}
          />
        )}
      </ContainerList>
    </Container>
  );
}

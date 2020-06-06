import React, { useEffect } from 'react';
import io from 'socket.io-client';
import {
  Container,
  Welcome,
  WelcomeText,
  HungerText,
  FlatSnacks,
  Title,
  ContainerList,
  Load,
  LoadContainer,
  ShimmerLoad,
} from './styles';
import HeaderMain from '~/pages/Main/Header';
import SnackBar from '~/pages/Main/Snacks';

import { useDispatch, useSelector } from 'react-redux';
import { SnackBarActions } from '~/store/ducks/snackbar';
import { bagActions } from '~/store/ducks/bag';

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
    socket.on('new_snack', (newSnack) => {
      dispatch(SnackBarActions.ioSnackAdd(newSnack));
    });
  }

  function snackbarsLoad() {
    dispatch(SnackBarActions.snackbarsRequest());
    dispatch(bagActions.load_bag_request());
  }

  return (
    <Container>
      <HeaderMain />
      <Welcome>
        <WelcomeText>Olá, Helton</WelcomeText>
        <HungerText>O que deseja comer hoje?</HungerText>
      </Welcome>

      <Title>Lanchonetes abertas</Title>
      {loading ? (
        <LoadContainer>
          <ShimmerLoad autoRun={true} visible={!loading}>
            <Load />
          </ShimmerLoad>
          <ShimmerLoad autoRun={true} visible={!loading}>
            <Load />
          </ShimmerLoad>
          <ShimmerLoad autoRun={true} visible={!loading}>
            <Load />
          </ShimmerLoad>
        </LoadContainer>
      ) : (
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
      )}
    </Container>
  );
}

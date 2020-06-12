import React, { useEffect } from 'react';
import io from 'socket.io-client';
import {
  Container,
  Welcome,
  WelcomeText,
  HungerText,
  Body,
  FlatList,
} from './styles';
import HeaderMain from '~/pages/Main/Header';
import Categories from './GeralCategories';
import { useDispatch, useSelector } from 'react-redux';
import { SnackBarActions } from '~/store/ducks/snackbar';
import { AppActions } from '~/store/ducks/app';
import {
  Load,
  LoadContainer,
  ShimmerLoad,
  ShimmerLoadText,
} from '~/pages/Main/List_Snack/styles';
import List_Snack from '~/pages/Main/List_Snack';

export default function Main({ navigation }) {
  const all_snacks = useSelector((state) => state.snackBar.all_snacks);
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
      //dispatch(SnackBarActions.ioSnackAdd(newSnack));
      dispatch(AppActions.load_all());
    });
  }

  function snackbarsLoad() {
    dispatch(AppActions.load_all());
  }

  return (
    <Container>
      <HeaderMain />
      <Welcome>
        <WelcomeText>Olá, Helton</WelcomeText>
        <HungerText>O que deseja comer hoje?</HungerText>
      </Welcome>
      <Categories />
      <Body>
        {loading ? (
          <>
            <ShimmerLoadText
              autoRun={true}
              visible={!loading}></ShimmerLoadText>
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
          </>
        ) : (
          <FlatList
            data={all_snacks}
            keyExtractor={(all) => String(all.id)}
            renderItem={({ item }) => <List_Snack snacks={item} />}
          />
        )}
      </Body>
    </Container>
  );
}

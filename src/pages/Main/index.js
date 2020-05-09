import React, { useEffect, useState } from 'react';
import {
  Container,
  Welcome,
  WelcomeText,
  HungerText,
  FlatSnacks,
  Title
} from './styles';
import HeaderMain from '~/pages/Main/Header';
import Categories from '~/pages/Main/Categories';
import SnackBar from '~/pages/Main/Snacks';

import { useDispatch, useSelector } from 'react-redux';
import { SnackBarActions } from '~/store/ducks/snackbar';

export default function Main({ navigation }) {
  const snacks = useSelector((state) => state.snackBar.snackbars);

  const dispatch = useDispatch();

  useEffect(() => {
    snackbarsLoad();
  }, []);

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

      <Categories />


      <FlatSnacks
        ListHeaderComponent={() => (
          <Title>Lanchonetes</Title>
        )}
        keyboardShouldPersistTabs="handled"
        data={snacks}
        keyExtractor={(snack) => String(snack.id)}
        renderItem={({ item }) => (
          <SnackBar navigation={navigation} snack={item} />
        )}
      />
    </Container>
  );
}

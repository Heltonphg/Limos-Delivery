import React from 'react';
import Header from '~/components/Header';
import {
  Container,
  Content,
  FirstText,
  InputIcon,
  SecondText,
  ButtonForgot,
  ButtonForgotText,
} from './styles';

import { Input, InputContainer, InputWrapper } from '../Login/styles';

export default function ForgotPassword({ navigation }) {
  return (
    <Container>
      <Header navigation={navigation} title={'Recuperar Senha'} buttonBack={true} />
      <Content>
        <FirstText>
          Para receber uma nova senha, insira o{' '}
          <SecondText style={{ lineHeight: 22 }}>
            e-mail cadastrado no sistema
          </SecondText>
        </FirstText>

        <InputContainer>
          <InputWrapper>
            <InputIcon name="md-mail" />
            <Input
              autoCapitalize={'none'}
              autoCorrect={false}
              placeholder={'Digite seu e-mail'}
              autoCompleteType={'off'}
              returnKeyType={'next'}
              blurOnSubmit={false}
              onChangeText={(e) => {}}
            />
          </InputWrapper>
        </InputContainer>

        <ButtonForgot>
          <ButtonForgotText>Enviar</ButtonForgotText>
        </ButtonForgot>
      </Content>
    </Container>
  );
}

import React from 'react';
import { ScrollView } from 'react-native';

import {
  Container,
  LoginContainer,
  Logo,
  InputContainer,
  InputLabel,
  InputWrapper,
  InputIcon,
  SocialIcon,
  Input,
  EsqueciSenha,
  EsqueciSenhaText,
  ButtonEntrarText,
  ButtonEntrar,
  ContainerLine,
  Line,
  TextLogo,
  LineText,
  ButtonSocial,
  ContainerCreateAcount,
} from './styles';
import logo from '~/assets/lo.png';
import { colors } from '~/styles';
export default function Login({ navigation }) {
  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <LoginContainer>
          <Logo resizeMode={'contain'} source={logo} />
          <TextLogo>Limos Delivery</TextLogo>
          <InputContainer>
            <InputLabel>Email</InputLabel>
            <InputWrapper>
              <InputIcon name="email" />
              <Input
                autoCapitalize={'none'}
                autoCorrect={false}
                placeholder={'Digite seu email'}
                autoCompleteType={'off'}
                returnKeyType={'next'}
                blurOnSubmit={false}
              />
            </InputWrapper>
          </InputContainer>

          <InputContainer style={{ marginTop: 18 }}>
            <InputLabel>Senha</InputLabel>
            <InputWrapper>
              <InputIcon name="lock" />
              <Input
                autoCapitalize={'none'}
                autoCorrect={false}
                placeholder={'Digite sua senha'}
                autoCompleteType={'off'}
                returnKeyType={'next'}
                secureTextEntry={true}
                blurOnSubmit={false}
              />
            </InputWrapper>
          </InputContainer>

          <EsqueciSenha onPress={() => navigation.navigate('ForgotPassword')}>
            <EsqueciSenhaText>Esqueci minha senha</EsqueciSenhaText>
          </EsqueciSenha>

          <ButtonEntrar onPress={() => navigation.navigate('Main')}>
            <ButtonEntrarText>ENTRAR</ButtonEntrarText>
          </ButtonEntrar>

          <ContainerLine>
            <Line />
            <LineText>Ou</LineText>
            <Line />
          </ContainerLine>

          <ButtonSocial>
            <SocialIcon name="logo-facebook" />
            <LineText>Entrar com o Facebook</LineText>
          </ButtonSocial>
        </LoginContainer>
      </ScrollView>

      <ContainerCreateAcount>
        <LineText style={{ color: colors.darkTransparent }}>
          Não tem uma conta?{' '}
          <LineText style={{ color: colors.secondary }}>Cadastre-se</LineText>
        </LineText>
      </ContainerCreateAcount>
    </Container>
  );
}

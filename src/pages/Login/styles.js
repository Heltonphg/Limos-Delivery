import styled from 'styled-components/native';
import { colors, fonts } from '../../styles';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const Container = styled.KeyboardAvoidingView.attrs({
  behavior: Platform.select({
    ios: 'padding',
    android: null,
  }),
})`
  flex: 1;
  background-color: ${colors.primary};
`;

export const LoginContainer = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  margin: 0 20px;
`;

export const Logo = styled.Image.attrs({
  tintColor: colors.secondary,
})`
  width: 70%;
  height: 100px;
  margin: 30px 40px 15px 40px;
`;

export const TextLogo = styled.Text`
  font-size: 18px;
  color: ${colors.secondary};
  font-family: ${fonts.primary};
`;

export const InputContainer = styled.View`
  width: 100%;
  flex-direction: column;
  margin-top: 10px;
`;

export const InputLabel = styled.Text`
  color: ${colors.secondary};
  padding-left: 3px;
  padding-bottom: 2px;
  font-family: ${fonts.primary};
  font-size: 15px;
`;

export const InputWrapper = styled.View`
  height: 45px;
  flex-direction: row;
  background-color: ${colors.primary};
  border-bottom-width: 1.6px;
  border-bottom-left-radius: 1px;
  border-bottom-right-radius: 1px;
  justify-content: center;
  align-items: center;
  border-bottom-color: ${colors.secondary};
  padding: 5px;
`;

export const InputIcon = styled(Icon).attrs({
  size: 25,
})`
  color: ${colors.secondary};
  margin-right: 5px;
  margin-left: 5px;
`;
export const SocialIcon = styled(Ionicons).attrs({
  size: 34,
})`
  color: ${colors.secondary};
  margin-right: 5px;
  margin-left: 5px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: colors.secondary,
})`
  flex: 1;
  height: 60px;
  color: ${colors.secondary};
`;
export const EsqueciSenha = styled.TouchableOpacity`
  color: ${colors.secondary};
  padding-left: 3px;
  align-self: flex-end;
  font-size: 19px;
  margin-top: 13px;
  margin-bottom: 30px;
`;

export const EsqueciSenhaText = styled.Text`
  color: ${colors.secondary};
  font-size: 13px;
  font-family: ${fonts.primary};
`;

export const ButtonEntrar = styled.TouchableOpacity`
  padding-left: 3px;
  width: 100%;
  height: 45px;
  background-color: transparent;
  justify-content: center;
  align-items: center;
  border-width: 2px;
  background: ${colors.secondary};
  border-color: ${colors.secondary};
  border-radius: 5px;
`;

export const ButtonEntrarText = styled.Text`
  color: ${colors.primary};
  font-size: 19px;
  font-family: ${fonts.primary};
`;

export const LineText = styled.Text`
  color: ${colors.secondary};
  font-size: 15px;
  margin: 0 10px;
  font-family: ${fonts.primary};
`;

export const Line = styled.View`
  background: ${colors.secondary};
  height: 2px;
  flex: 1;
`;
export const ContainerLine = styled.View`
  flex-direction: row;
  justify-content: center;
  margin: 0 1px;
  margin-top: 40px;
  align-items: center;
`;
export const ButtonSocial = styled.View`
  justify-content: center;
  margin-top: 20px;
  align-items: center;
  flex-direction: row;
`;
export const ContainerCreateAcount = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 45px;
  background-color: ${colors.whiter};
`;

import styled from 'styled-components/native';
import { colors, fonts } from '~/styles';
import Icon from 'react-native-vector-icons/Ionicons';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.primary};
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  padding: 90px 30px;
`;

export const FirstText = styled.Text`
  font-size: 18px;
  font-family: ${fonts.primary};
  color: ${colors.secondary};
`;

export const SecondText = styled.Text`
  font-size: 18px;
  font-family: ${fonts.primary};
  color: ${colors.secondary};
`;

export const InputIcon = styled(Icon).attrs({
  size: 25,
})`
  color: ${colors.secondary};
  margin-right: 5px;
  margin-left: 5px;
`;

export const ButtonForgot = styled.TouchableOpacity`
  padding-left: 3px;
  width: 85%;
  height: 42px;
  background-color: ${colors.secondary};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin: 20px 0 0 0;
`;

export const ButtonForgotText = styled.Text`
  color: white;
  font-size: 20px;
  font-family: ${fonts.primary};
`;

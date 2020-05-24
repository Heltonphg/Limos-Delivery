import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Entipo from 'react-native-vector-icons/Entypo';
import { colors, fonts } from '~/styles';

export const Container = styled.View`
  width: 100%;
  height: 20px;
  margin-bottom: -6px;
  align-items: center;
  padding: 30px 12px;
  margin-top: 3px;
  flex-direction: row;
  justify-content: space-between;
`;

export const IconSide = styled(Icon)`
  font-size: 27px;
  color: ${colors.secondary};
  font-family: ${fonts.primary};
`;
export const IconCart = styled(Entipo)`
  font-size: 24px;
  color: ${colors.secondary};
  font-family: ${fonts.primary};
`;

export const CurrentLocation = styled.View`
  width: 50%;
  height: 35px;
  border-radius: 15px;
  background-color: ${colors.whiter};
  justify-content: center;
  align-items: center;
`;

export const CurrentText = styled.Text`
  font-family: ${fonts.primary};
  font-size: 13px;
  color: ${colors.secondary};
`;

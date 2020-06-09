import styled from 'styled-components/native';
import { colors, fonts } from '../../styles';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.primary};
`;
export const Body = styled.View`
  flex: 1;
`;

export const Welcome = styled.View`
  flex: 0.12;
  padding: 5px 15px;
  justify-content: center;
`;

export const WelcomeText = styled.Text`
  font-size: 24px;
  color: ${colors.secondary};
  font-family: ${fonts.primary};
`;

export const HungerText = styled.Text`
  font-size: 17px;
  color: ${colors.secondary};
  font-family: ${fonts.secondary};
`;

export const Title = styled.Text`
  font-size: 17px;
  color: ${colors.secondary};
  font-family: ${fonts.primary};
  padding: 5px 15px 0 15px;
`;

export const FlatList = styled.FlatList.attrs({
  horizontal: false,
  showsHorizontalScrollIndicator: false,
  maxToRenderPerBatch: 10,
  initialNumToRender: 10,
})``;

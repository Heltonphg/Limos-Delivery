import styled from 'styled-components/native';
import { colors, fonts } from '../../styles';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.primary};
`;

export const Welcome = styled.View`
  flex: 0.1;
  padding: 3px 15px;
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
  font-size: 18px;
  color: ${colors.secondary};
  font-family: ${fonts.primary};
`;

export const FlatSnacks = styled.FlatList.attrs({
  contentContainerStyle: { paddingBottom: 0, paddingHorizontal: 15},
  maxToRenderPerBatch: 10,
  initialNumToRender: 10,
})`
`;

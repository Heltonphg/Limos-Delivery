import styled from 'styled-components/native';
import { colors, fonts } from '~/styles';

export const Container = styled.View`
  height: 100px;
  margin-top: 6px;
`;

export const CategoryContainer = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: { paddingHorizontal: 5 },
  showsHorizontalScrollIndicator: false,
})``;

export const TabItem = styled.View`
  width: 60px;
  height: 55px;
  background: ${colors.whiter};
  border-radius: 6px;
  margin-left: 10px;
  align-self: center;
  justify-content: center;
  align-items: center;
`;

export const TabItemContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const ImageIcon = styled.Image`
  width: 40px;
  height: 40px;
`;
export const Title = styled.Text`
  font-size: 17px;
  color: ${colors.secondary};
  margin-left: 15px;
  font-family: ${fonts.primary};
`;
export const CategoryText = styled.Text`
  font-size: 11px;
  color: ${colors.darkTransparent};
  margin-left: 15px;
  font-family: ${fonts.terciary};
`;

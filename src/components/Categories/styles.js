import styled from 'styled-components/native';
import { colors, fonts } from '~/styles';

export const Container = styled.View`
  height: 78px;
  margin-top: 5px;
  justify-content: center;
`;

export const CategoryContainer = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;

export const TabItem = styled.View`
  width: 100px;
  height: 39px;
  background: ${colors.whiter};
  border-radius: 6px;
  margin-left: 6px;
  align-self: center;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const TabItemContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const ImageIcon = styled.Image`
  width: 27px;
  height: 27px;
`;
export const Title = styled.Text`
  font-size: 17px;
  color: ${colors.secondary};
  margin-left: 15px;
  font-family: ${fonts.primary};
`;
export const CategoryText = styled.Text`
  font-size: 12px;
  color: ${colors.darkTransparent};
  margin-left: 7px;
  font-family: ${fonts.terciary};
`;

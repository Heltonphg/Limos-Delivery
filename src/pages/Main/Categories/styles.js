import styled from 'styled-components/native';
import {colors, fonts} from '~/styles';

export const Container = styled.View`
  height: 115px;
  margin-top: 13px;
`;

export const CategoryContainer = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;

export const TabItem = styled.View`
  width: 60px;
  height: 60px;
  background: ${colors.whiter};
  border-radius: 6px;
  margin-left: 15px;
  align-self: center;
  justify-content: center;
  align-items: center;
`;

export const TabItemContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const ImageIcon = styled.Image`
  width: 45px;
  height: 45px;
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

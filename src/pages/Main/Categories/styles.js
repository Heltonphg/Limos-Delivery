import styled from 'styled-components/native';
import { colors } from '~/styles';

export const Container = styled.View`
  height: 75px;
  margin-top: 35px;
`;

export const CategoryContainer = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;

export const TabItem = styled.View`
  width: 65px;
  height: 65px;
  background: ${colors.whiter};
  border-radius: 6px;
  margin-left: 12px;
  align-self: center;
  justify-content: center;
  align-items: center;
`;

export const TabItemContainer = styled.View`
  justify-content: center;
`;

export const ImageIcon = styled.Image`
  width: 45px;
  height: 45px;
`;

export const TextIcon = styled.Text`
  font-size: 14px;
  color: ${colors.darker};
  font-weight: 500;
  margin-left: 12px;
  text-align: center;
`;

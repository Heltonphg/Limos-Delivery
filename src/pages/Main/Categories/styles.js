import styled from 'styled-components/native';
import {colors, fonts} from '~/styles';

export const Container = styled.View`
  height: 105px;
  margin-top: 13px;
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
  margin-left: 15px;
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
export const Title = styled.Text`
  font-size: 18px;
  color: ${colors.secondary};
  margin-left: 15px;
  font-family: ${fonts.primary};
`;

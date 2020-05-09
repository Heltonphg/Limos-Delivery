import styled from 'styled-components/native';
import {colors, fonts} from '~/styles';

export const Container = styled.View`
  height:105px;
  margin-top: 50px;
  margin-bottom: 7px;
`;

export const CategoryContainer = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;

export const TabItem = styled.View`
  width: 66px;
  height: 66px;
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
  padding-bottom: 5px;
  font-family: ${fonts.primary};
`;

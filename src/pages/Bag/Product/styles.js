import styled from 'styled-components/native';
import { colors, fonts } from '~/styles';

export const Container = styled.View`
  margin: 8px 0 0 0;
  height: 105px;
  flex-direction: row;
  border-radius: 6px;
  background-color: ${colors.secondary};
`;
export const ImageContainer = styled.View`
  flex: 0.44;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  overflow: hidden;
`;
export const ProductInfo = styled.View`
  flex: 0.59;
  flex-direction: row;
  border-radius: 6px;
`;
export const Firt = styled.View`
  flex: 0.8;
  flex-direction: column;
  border-radius: 6px;
`;
export const Second = styled.View`
  flex: 0.2;
  flex-direction: column;
  border-radius: 6px;
  padding: 5px 0 5px 0;
  justify-content: space-between;
  align-items: center;
`;

export const ProductName = styled.Text`
  font-size: 15px;
  line-height: 17px;
  margin-bottom: -3px;
  text-align: left;
  margin-top: 5px;
  font-family: ${fonts.primary};
  padding-left: 5px;
  color: ${colors.whiter};
`;

export const Price = styled.Text`
  font-size: 15px;
  margin-top: 4px;
  font-family: ${fonts.primary};
  padding-left: 5px;
  color: ${colors.whiter};
`;

export const TextQuantity = styled.Text`
  font-size: 17px;
  margin-right: 5px;
  font-family: ${fonts.primary};
  padding-left: 5px;
  color: ${colors.whiter};
`;

export const ProductDescription = styled.Text`
  font-size: 11px;
  font-family: ${fonts.secondary};
  margin-top: 4px;
  padding-left: 5px;
  padding-right: 5px;
  color: ${colors.whiter};
`;

export const ProductImg = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;

export const Button = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
`;

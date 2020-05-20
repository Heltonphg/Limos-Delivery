import styled from "styled-components/native/dist/styled-components.native.esm";
import {colors, fonts} from "~/styles";


export const ProductContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})`
  height: 300px;
  width: 220px;
  margin-top: 18px;
  border-radius: 6px;
  background: ${colors.secondary};
`;

export const ContainerInfoProduct = styled.View`
  flex: 1;
  justify-content: space-between;
`;
export const InfoTitleDescription = styled.View`
  padding: 0 2px 4px 2px;
  flex: 1;
  align-items: center;
`;
export const Stars = styled.View`
  background: ${colors.whiter};
  width: 45px;
  border-radius: 3px;
  justify-content: center;
  align-items: center;
  position: absolute;
  flex-direction: row;
  top: 6px;
  left: 10px;
`;

export const StarText = styled.Text`
  font-size: 13px;
  margin-right: 2px;
  color: ${colors.secondary};
  font-family: ${fonts.primary};
`;

export const Title = styled.Text`
  font-size: 18px;
  color: ${colors.whiter};
  font-family: ${fonts.primary};
`;
export const Preco = styled.Text`
  font-size: 20px;
  color: ${colors.whiter};
  font-family: ${fonts.primary};
`;

export const Description = styled.Text`
  font-size: 11px;
  color: ${colors.whiter};
  text-align: justify;
  margin-left: 5px;
  margin-right: 5px;
  font-family: ${fonts.secondary};
`;
export const Acompanha = styled.Text`
  font-size: 11px;
  color: ${colors.whiter};
  text-align: justify;
  margin-left: 5px;
  margin-right: 5px;
  font-family: ${fonts.secondary};
`;

export const ProductImg = styled.ImageBackground`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const ContainerImg = styled.View`
  width: 100%;
  height: 125px;
  border-radius: 6px;
  overflow: hidden;
`;

export const ContainerSelect = styled.View`
  flex: 0.3;
  flex-direction: row;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonProduct = styled.TouchableOpacity.attrs({
  hitSlop: { top: 20, left: 20, right: 20, bottom: 20 },
})`
  width: 20%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const BaseText = styled.Text`
  color: ${colors.terciary};
  font-size: 15px;
  font-family: ${fonts.primary};
`;


import styled from 'styled-components/native';
import { colors } from '~/styles';
import fonts from '~/styles/fonts';

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const Header = styled.View`
  width: 100%;
  height: 180px;
`;

export const InfoContainer = styled.View`
  margin: 0 3px;
  padding: 0 4px;
  height: 35px;
  justify-content: center;
  background: ${colors.whiter};
  border-radius: 5px;
`;

export const CotainerName = styled.View`
  width: 77%;
  height: 51px;
  justify-content: center;
`;

export const BodyHeader = styled.View`
  flex: 0.34;
`;

export const Options = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 10px;
  align-items: center;
`;

export const ContentLogo = styled.View`
  position: absolute;
  top: 145px;
  left: 275px;
  right: 0px;
  bottom: 0px;
  width: 75px;
  height: 75px;
  border-radius: 8px;
`;

export const Details = styled.View`
  width: 100%;
  height: 40px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-bottom: -2px;
  margin-top: 1px;
`;

export const SnackDetails = styled.View``;

export const Background = styled.ImageBackground.attrs({
  resizeMode: 'stretch',
})`
  width: 100%;
  height: 100%;
  opacity: 0.6;
`;

export const Cover = styled.Image`
  width: 75px;
  height: 75px;
  border-radius: 8px;
`;

export const Name = styled.Text`
  font-size: 19px;
  font-family: ${fonts.secondary};
  color: ${colors.secondary};
  padding-left: 15px;
`;

export const BackButton = styled.TouchableOpacity.attrs({
  hitSlop: { top: 10, left: 10, right: 10, bottom: 10 },
})``;

export const InfoTitle = styled.Text`
  font-size: 13px;
  text-align: center;
  font-family: ${fonts.secondary};
  color: ${colors.darker};
`;

export const Info = styled.Text`
  font-size: 12px;
  text-align: center;
  font-family: ${fonts.terciary};
  color: ${colors.secondary};
`;

export const ImgContainer = styled.View`
  width: 100%;
  height: 100%;
`;

export const ListContainer = styled.View`
  flex: 0.68;
  margin: 0 15px;
  justify-content: center;
  align-items: center;
`;

//----PRODUCT LIST SNAP

export const ProductContainer = styled.View`
  height: 300px;
  margin-top: 18px;
  border-radius: 6px;
  align-items: center;
  background: ${colors.secondary};
`;

export const ContainerInfoProduct = styled.View`
  padding: 0 2px;
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
  font-size: 20px;
  color: ${colors.whiter};
  font-family: ${fonts.primary};
`;

export const Description = styled.Text`
  font-size: 11px;
  color: ${colors.whiter};
  text-align: center;
  margin-left: 2px;
  font-family: ${fonts.secondary};
`;

export const ProductImg = styled.Image.attrs({
  resizeMode: 'contain'
})`
  width: 100%;
  height: 150px;
  border-radius: 10px;
`;

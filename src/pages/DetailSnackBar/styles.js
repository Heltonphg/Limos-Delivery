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
  align-items: center;
  background: ${colors.whiter};
  border-radius: 5px;
`;

export const CotainerName = styled.View`
  width: 77%;
  height: 51px;
  justify-content: center;
`;

export const BodyHeader = styled.View`
  flex: 0.36;
  margin-bottom: -1px;
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
  margin-top: 15px;
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
  margin-right: 3px;
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
  flex: 0.65;
  margin: 0 15px;
  align-items: center;
`;

export const Space = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

//----PRODUCT LIST SNAP

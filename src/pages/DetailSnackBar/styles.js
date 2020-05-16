import styled from 'styled-components/native';
import { colors } from '~/styles';
import fonts from '~/styles/fonts';

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const Header = styled.View`
  flex: 0.26;
`;

export const Body = styled.View`
  flex: 0.75;
`;

export const Options = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 10px;
  align-items: center;
`;

export const SnackDetails = styled.View`
  align-items: center;
`;

export const Background = styled.ImageBackground.attrs({
})`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.8;
`;

export const Name = styled.Text`
  font-size: 19px;
  font-family: ${fonts.secondary};
  color: ${colors.secondary};
  padding-left: 15px;
`;

export const Cover = styled.Image`
  width: 75px;
  height: 75px;
  border-radius: 8px;
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

export const Title = styled.Text`
  font-size: 16px;
  color: #fff;
`;

export const BackButton = styled.TouchableOpacity.attrs({
  hitSlop: { top: 10, left: 10, right: 10, bottom: 10 },
})``;

export const Details = styled.View`
  width: 100%;
  height: 40px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-bottom: -5px;
`;
export const InfoContainer = styled.View`
  margin: 0 3px;
`;

export const CotainerName = styled.View`
  width: 77%;
  height: 51px;
  justify-content: center;
`;

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

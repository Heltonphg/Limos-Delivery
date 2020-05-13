import styled from 'styled-components/native';
import {colors} from "~/styles";
import fonts from "~/styles/fonts";

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;
export const Header = styled.View`
  flex: 0.3;
  background: transparent;
`;

;export const Body = styled.View`
  flex: 0.7;
`;

export const SnackDetails = styled.View`
  padding: 0 0 20px;
  align-items: center;
  padding-top: 10px;
`;

export const Background = styled.ImageBackground`
  position: absolute;
  width: 100%;
  height: 200px;
   opacity: 0.8;
`;

export const SnackTitle = styled.Text`
  font-size: 13px;
  font-family: ${fonts.secondary};
  text-align: center;
  color: ${colors.darker};
  margin-top: 5px;
`;
export const Name = styled.Text`
  font-size: 23px;
  font-family: ${fonts.terciary};
  color: ${colors.secondary};
  padding-left: 15px;
`;

export const Cover = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 8px;
`;
export const ContentLogo = styled.View`
  position: absolute;
  top: 155px;
  left: 260px;
  right: 0px;
  bottom: 0px;
  width: 80px;
  height: 80px;
  border-radius: 8px;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: #fff;
`;

export const BackButton = styled.TouchableOpacity.attrs({
  hitSlop: { top: 10, left: 10, right: 10, bottom: 10 },
})`
  position: absolute;
  left: 10px;
  top: 20px;
`;

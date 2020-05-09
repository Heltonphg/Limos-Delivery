import styled from 'styled-components/native';
import { colors, fonts } from '~/styles';

export const Container = styled.View`
  width: 165px;
  height: 190px;
  background-color: ${colors.whiter};
  margin-left: 5px;
  border-radius: 6px;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const Avaliation = styled.View`
  flex-direction: row;
  width: 40px;
  margin-left: 7px;
  margin-top: 2px;
  border-radius: 2px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.secondary};
`;

export const AvaliationText = styled.Text`
  font-size: 13px;
  color: ${colors.whiter};
  margin-right: 3px;
`;

export const Title = styled.Text`
  font-size: 15px;
  color: ${colors.secondary};
  font-family: ${fonts.secondary};
`;
export const FechamentoText = styled.Text`
  font-size: 13px;
  text-align: center;
  margin-bottom: 1px;
  color: ${colors.darkTransparent};
    font-family: ${fonts.secondary};
`;

export const Background = styled.ImageBackground`
  width: 100%;
  height: 75%;
`;

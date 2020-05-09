import styled from 'styled-components/native';
import {colors, fonts} from "~/styles";

export const Container = styled.View`
  width: 100%;
  background-color: red;
  margin-top: 10px;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: ${colors.secondary};
  margin-left: 15px;
  padding: 0 0 2px 0;
  font-family: ${fonts.primary};
`;

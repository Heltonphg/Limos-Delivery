import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors, fonts } from '../../../styles';

export const Container = styled.View`
  flex: 1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  justify-content: center;
  align-items: center;
`;

export const ModalCloseArea = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.7;
`;
export const ContainerInfo = styled.TouchableOpacity`
  width: 100%;
  height: 60%;
  padding: 0 5px;
  justify-content: center;
  align-items: center;
  margin-bottom: 38px;
`;

export const ModalBox = styled.View`
  width: 80%;
  height: 30%;
  position: absolute;
  background-color: white;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  elevation: 2;
`;

export const ModalHeader = styled.TouchableOpacity`
  position: absolute;
  top: -40px;
  border-width: 6px;
  border-color: ${colors.primary};
  height: 79px;
  width: 79px;
  border-radius: 39px;
  justify-content: center;
  align-items: center;
`;


export const ModalIcon = styled(Ionicons).attrs({
  size: 40,
})`
`;

export const ModalTitle = styled.Text`
  font-size: 20px;
  color: ${colors.secondary};
  font-family: ${fonts.primary};
  text-align: center;
`;

export const ModalContent = styled.Text`
 color: ${colors.secondary};
  font-family: ${fonts.primary};
  font-size: 15px;
  text-align: center;
`;

export const ModalButton = styled.TouchableOpacity`
  position: absolute;
  right: 15px;
  left: 15px;
  bottom: 15px;
  min-height: 45px;
  border-radius: 6px;
  background-color: #26c281;
  justify-content: center;
  align-items: center;
`;

export const ModalButtonText = styled.Text`
  font-size: 20px;
  color: white;
  font-family: ${fonts.primary};
`;

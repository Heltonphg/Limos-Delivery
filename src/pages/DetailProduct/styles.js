import styled from 'styled-components/native';
import {colors, fonts, metrics} from '../../styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.primary};
`;

export const BaseText = styled.Text`
  color: ${colors.secondary};
  font-size: 16px;
  margin-right: 3px;
  font-family: ${fonts.primary};
`;

export const ContainerImg = styled.View`
  flex: 0.32;
  background-color: ${colors.primary};
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  overflow: hidden;
`;

export const Imagem = styled.ImageBackground`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const BackButton = styled.TouchableOpacity.attrs({
  hitSlop: { top: 10, left: 10, right: 10, bottom: 10 },
})`
  top: 12px;
  left: 7px;
`;

export const Icons = styled(Icon)``;

export const ContainerInfos = styled.View`
  flex: 0.15;
`;

export const First = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 5px ${metrics.base_padding}px;
`;

export const ContainerSelect = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 40px;
  width: 130px;
`;

export const Title = styled.Text`
  font-family: ${fonts.secondary};
  font-size: 21px;
  text-align: left;
  color: ${colors.secondary};
`;

export const Quantity = styled.Text`
  font-family: ${fonts.primary};
  font-size: 19px;
  color: ${colors.terciary};
`;

export const ScrollItems = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: 10 },
})``;

export const Item = styled.View`
  width: 80px;
  height: 30px;
  border-radius: 5px;
  margin: 5px 4px 0 4px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background: ${colors.whiter};
`;

export const ContainerSize = styled.TouchableOpacity`
  width: 70px;
  height: 35px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: 7px;
  background: ${colors.whiter};
`;


export const ContainerText = styled.View`
  width: 60%;
  justify-content: center;
`;

export const ContainerDetails = styled.View`
  margin-top: 7px;
  align-items: center;
  justify-content: center;
`;
export const SelectSize = styled.View`
  flex:0.1;
  margin-top: 10px;
`;

export const TextSelect = styled.Text`
  font-family: ${fonts.primary};
  font-size: 15px;
  margin-left: ${metrics.base_padding}px;
  color: ${colors.secondary};
`;
export const TextSelectSize = styled.Text`
  font-family: ${fonts.primary};
  font-size: 15px;
  color: ${colors.secondary};
`;

export const FlatSizes = styled.FlatList.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: 8 },
})``;



//43

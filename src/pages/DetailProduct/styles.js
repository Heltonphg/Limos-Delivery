import styled from 'styled-components/native';
import { colors, fonts } from '../../styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.primary};
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

export const Icons = styled(Icon)`
`;

export const ContainerInfos = styled.View`
  flex: 0.68;
`;

export const First = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 15px;
`;

export const ContainerSelect = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 40px;
  width: 130px;
`;

export const Title = styled.Text`
  font-family: ${fonts.primary};
  font-size: 23px;
  color: ${colors.secondary}
`

export const Quantity = styled.Text`
  font-family: ${fonts.primary};
  font-size: 19px;
  color: ${colors.terciary}
`;

export const ScrollItems = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: 10 },
})`

`;

export const Item = styled.View`
   width: 70px;
   border-radius: 5px;
   margin:4px 2px 0 2px;
   height: 65px;
   justify-content: center;
   align-items: center;
   background: ${colors.whiter};
`;



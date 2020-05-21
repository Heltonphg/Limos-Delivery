import styled from 'styled-components/native';
import { colors, fonts } from '~/styles';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';

export const Container = styled.View`
  height: 78px;
  margin-top: 5px;
`;

export const CategoryList = styled.FlatList.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: 10 },
})``;

export const TabItem = styled.View`
  width: 100px;
  height: 39px;
  background: ${colors.whiter};
  border-radius: 6px;
  margin:0 4px 0 3px;
  align-self: center;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const TabItemContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.4,
})`
  justify-content: center;
  align-items: center;
`;

export const ImageIcon = styled.Image`
  width: 27px;
  height: 27px;
`;
export const Title = styled.Text`
  font-size: 17px;
  color: ${colors.secondary};
  margin-left: 15px;
  font-family: ${fonts.primary};
`;

export const CategoryText = styled.Text`
  font-size: 13px;
  color: ${colors.darkTransparent};
  margin-left: 6px;
  font-family: ${fonts.terciary};
`;

export const NoCategory = styled.Text`
  font-size: 15px;
  color: ${colors.darker};
  text-align: center;
  font-family: ${fonts.secondary};
`;

export const Shimmer = styled.View`
  width: 20px;
  height: 40px;
  margin-left: 11px;
  margin-top: 10px;
`;
export const ContLoad = styled.View`
  flex: 1;
  height: 30px;
  justify-content: center;
  flex-direction: row;
  margin: 0 15px;
`;

export const ShimmerLoad = styled(ShimmerPlaceHolder)`
  width: 80px;
  height: 30px;
  border-radius: 3px;
  margin-left: 5px;
`;

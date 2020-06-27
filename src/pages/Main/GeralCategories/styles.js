import styled from 'styled-components/native';
import { colors, fonts } from '~/styles';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';

export const Container = styled.View`
  height: 100px;
  margin-top: 6px;
  margin-bottom: -1px;
`;

export const CategoryContainer = styled.FlatList.attrs({
  horizontal: true,
  contentContainerStyle: { paddingHorizontal: 7 },
  showsHorizontalScrollIndicator: false,
})``;

export const TabItem = styled.View`
  width: 60px;
  height: 56px;
  background: ${colors.whiter};
  border-radius: 6px;
  margin-left: 7px;
  align-self: center;
  justify-content: center;
  align-items: center;
`;

export const TabItemContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.3,
})`
  justify-content: center;
  align-items: center;
`;

export const CotainerLoading = styled.View`
  flex-direction: row;
`;
export const ContentLoading = styled.View`
  flex-direction: column;
`;

export const ImageIcon = styled.Image`
  width: 40px;
  height: 40px;
`;
export const Title = styled.Text`
  font-size: 17px;
  color: ${colors.secondary};
  margin-left: 14px;
  font-family: ${fonts.primary};
`;
export const CategoryText = styled.Text`
  font-size: 11px;
  color: ${colors.darkTransparent};
  margin-top: 1px;
  margin-left: 6px;
  font-family: ${fonts.terciary};
`;

export const ShimmerLoadCat = styled(ShimmerPlaceHolder)`
  width: 60px;
  height: 56px;
  border-radius: 6px;
  margin-left: 14px;
`;

export const ShimmerLoadText = styled(ShimmerPlaceHolder)`
  width: 60px;
  height: 10px;
  margin-top: 4px;
  margin-bottom: 10px;
  border-radius: 2px;
  margin-left: 14px;
`;

import styled from 'styled-components/native';
import { colors, fonts } from '../../styles';
import Icon from 'react-native-vector-icons/Ionicons';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.primary};
`;

export const ContainerList = styled.View`
  flex: 0.37;
`;
export const LoadContainer = styled.View`
  flex: 0.37;
  flex-direction: row;
`;

export const Load = styled.View`
  width: 145px;
  height: 125px;
   border-radius: 6px;
  background-color: ${colors.whiter};
  margin-left: 15px;
`;

export const ShimmerLoad = styled(ShimmerPlaceHolder)`
  width: 145px;
  height: 130px;
  border-radius: 6px;
  margin-left: 10px;
`;

export const Welcome = styled.View`
  flex: 0.12;
  padding: 5px 15px;
  justify-content: center;
`;

export const WelcomeText = styled.Text`
  font-size: 24px;
  color: ${colors.secondary};
  font-family: ${fonts.primary};
`;

export const HungerText = styled.Text`
  font-size: 17px;
  color: ${colors.secondary};
  font-family: ${fonts.secondary};
`;

export const Title = styled.Text`
  font-size: 17px;
  color: ${colors.secondary};
  font-family: ${fonts.primary};
  padding: 5px 15px 0 15px;
`;

export const FlatSnacks = styled.FlatList.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: 10 },
  maxToRenderPerBatch: 10,
  initialNumToRender: 10,
})``;

export const ContainerSearch = styled.View`
  width: 100%;
  height: 50px;
  padding: 0 15px 0 15px;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: colors.secondary,
})`
  flex: 1;
  height: 60px;
  color: ${colors.secondary};
`;

export const InputIcon = styled(Icon).attrs({
  size: 25,
})`
  color: ${colors.secondary};
  margin-right: 5px;
  margin-left: 5px;
`;

export const InputWrapper = styled.View`
  height: 45px;
  flex-direction: row;
  background-color: ${colors.white};
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  padding: 5px;
`;

import styled from 'styled-components/native';
import { colors, fonts, metrics } from '~/styles';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.primary};
`;
export const Body = styled.View`
  flex: 0.9;
  padding: 0 ${metrics.base_padding}px;
`;

export const Footer = styled.View`
  flex: 0.1;
  padding: 0 ${metrics.base_padding}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: ${colors.whiter};
`;

export const PaymentText = styled.Text`
  color: ${colors.secondary};
  font-family: ${fonts.primary};
  font-size: 18px;
`;

export const PaymentButton = styled.TouchableOpacity`
  width: 40%;
  height: 40px;
  background: ${colors.secondary};
  border-radius: ${metrics.base_raidus}px;
  justify-content: center;
  align-items: center;
`;
export const PaymentButtonText = styled.Text`
  color: ${colors.whiter};
  font-family: ${fonts.primary};
  font-size: 15px;
`;

export const FlatProducts = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  maxToRenderPerBatch: 10,
  contentContainerStyle: { paddingBottom: 6 },
  initialNumToRender: 10,
})``;

export const RefreshControl = styled.RefreshControl`
  color: ${colors.secondary};
`;

import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { fonts, colors } from '../../styles';

export const Container = styled.View`
    width: 100%;
    height: 60px;
    background-color: ${colors.secondary};
    
    flex-direction: row;
`;
export const HeaderLeftButtonBox = styled.TouchableOpacity`
    justify-content:center;
    align-items: center;
    
    padding: 0 20px;
`;
export const HeaderTextBox = styled.View`
    flex:1;
    justify-content:center;
`;

export const Title = styled.Text`
    color: white;
    font-family: ${fonts.primary};
    text-align: center;
    font-size: 20px;
    margin-right: 51px;
`;
export const IconHeader = styled(Icon)`
    font-size: 24px;
    color: white;
    font-family: ${fonts.primary};
`;

import React from 'react';
import {
  Container,
  Title,
  IconHeader,
  HeaderLeftButtonBox,
  HeaderTextBox,
} from './styles';
import { withNavigation } from 'react-navigation';

function Header({ title, buttonBack, navigation }) {
  function goBack() {
    navigation.goBack();
  }

  return (
    <Container>
      {buttonBack && <HeaderLeftButtonBox onPress={goBack}>
        <IconHeader
          name="md-arrow-round-back"
          size={22}
          color="#f5f5f5"
        />
      </HeaderLeftButtonBox>
      }
      {title && <HeaderTextBox>
        <Title>{title}</Title>
      </HeaderTextBox>}
    </Container>
  );
}
export default  withNavigation(Header)

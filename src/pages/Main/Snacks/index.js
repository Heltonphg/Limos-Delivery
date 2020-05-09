import React from 'react';

import {Title,Container} from './styles';

export default function SnackBar({navigation, snack}) {
  return (
    <Container>
      <Title>{snack.name}</Title>
    </Container>

  )
}

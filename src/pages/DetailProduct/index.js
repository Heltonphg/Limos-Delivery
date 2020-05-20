import React from 'react';
import { View, Text} from 'react-native';

export default function DetailProduct({ navigation }) {
  const product = navigation.getParam('product', null);

  return <View>
    <Text>{product.name}</Text>
    <Text>{product.preco}</Text>
    <Text>{product.avaliation}</Text>
    <Text>{product.time_preparation}</Text>
    <Text>{product.description}</Text>
  </View>;
}

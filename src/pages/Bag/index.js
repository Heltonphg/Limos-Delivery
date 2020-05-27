import React from 'react';
import {Text,View} from 'react-native';

export default function Bag({navigation}) {
  const products = navigation.getParam('products', []);
  return(
    <View style={{flex:1}}>
      {
        products && products.map(item =>{
          return (
            <Text key={item.id}>{item.id}</Text>
          )
        })
      }
    </View>
  )
}

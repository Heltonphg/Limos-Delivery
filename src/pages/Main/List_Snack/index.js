import {
  ContainerList,
  FlatSnacks,
  Title,
} from './styles';
import SnackBar from '~/pages/Main/Snacks';
import React from 'react';
import { View } from 'react-native';


export default function List_Snack({ snacks }) {
  return (
    <View>
      {snacks && snacks?.snacks?.length > 0 && <Title>{snacks.title}</Title>}
      {snacks && (
        <ContainerList>
          <FlatSnacks
            keyboardShouldPersistTabs="handled"
            data={snacks.snacks}
            keyExtractor={(snack) => String(snack.id)}
            renderItem={({ item }) => <SnackBar snack={item} />}
          />
        </ContainerList>
      )}
    </View>
  );
}

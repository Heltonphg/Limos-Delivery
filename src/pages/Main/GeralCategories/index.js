import React from 'react';
import {
  Container,
  CategoryContainer,
  TabItem,
  ImageIcon,
  Title,
  TabItemContainer,
  CategoryText,
  ShimmerLoadCat,
  ShimmerLoadText,
  CotainerLoading,
  ContentLoading,
} from './styles';
import { useSelector } from 'react-redux';
import { colors } from '~/styles';

function render_cat(item) {
  return (
    <TabItemContainer>
      <TabItem>
        <ImageIcon
          tintColor={colors.secondary}
          source={{ uri: item.categoryimg }}
        />
      </TabItem>
      <CategoryText>{item.name}</CategoryText>
    </TabItemContainer>
  );
}

function loading_cate(loading) {
  let v = [1, 2, 3, 4, 5];
  return (
    <CotainerLoading>
      {v.map((elemet) => {
        return (
          <ContentLoading key={elemet}>
            <ShimmerLoadCat autoRun={true} visible={!loading}></ShimmerLoadCat>
            <ShimmerLoadText
              autoRun={true}
              visible={!loading}></ShimmerLoadText>
          </ContentLoading>
        );
      })}
    </CotainerLoading>
  );
}

export default function Categories() {
  const all_categories = useSelector(
    (state) => state.categories.all_categories,
  );
  const loading = useSelector((state) => state.snackBar.loading);
  return (
    <Container>
      {!loading && <Title>Categorias</Title>}
      {loading && (
        <ShimmerLoadText
          style={{ width: 80 }}
          autoRun={true}
          visible={!loading}></ShimmerLoadText>
      )}

      {loading && loading_cate(loading)}

      {all_categories && !loading && (
        <CategoryContainer
          data={all_categories}
          keyExtractor={(cat) => String(cat.id)}
          renderItem={({ item }) => render_cat(item)}
        />
      )}
    </Container>
  );
}

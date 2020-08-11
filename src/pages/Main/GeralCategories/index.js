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
import { useDispatch, useSelector } from 'react-redux';
import { colors } from '~/styles';
import { CatActions } from '~/store/ducks/categories';

function render_cat(item, handleSelectCategoryAll, current_all) {
  return (
    <TabItemContainer onPress={() => handleSelectCategoryAll(item)}>
      <TabItem
        style={
          item.id == current_all?.id && {
            backgroundColor: colors.secondary,
          }
        }>
        <ImageIcon
          tintColor={
            item.id == current_all?.id ? colors.whiter : colors.secondary
          }
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
  const dispatch = useDispatch();

  const all_categories = useSelector(
    (state) => state.categories.all_categories,
  );
  const loading = useSelector((state) => state.categories.loading_cat);
  const current_all = useSelector((state) => state.categories.current_all);

  function handleSelectCategoryAll(item) {
    dispatch(CatActions.setCurrentAll(item));
  }

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
          renderItem={({ item }) =>
            render_cat(item, handleSelectCategoryAll, current_all)
          }
        />
      )}
    </Container>
  );
}

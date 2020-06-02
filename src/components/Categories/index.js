import React from 'react';
import {
  Container,
  CategoryList,
  TabItem,
  ImageIcon,
  Title,
  TabItemContainer,
  CategoryText,
  NoCategory,
  Shimmer,
  ShimmerLoad,
  ContLoad,
} from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { colors } from '~/styles';
import { CatActions } from '~/store/ducks/categories';

export default function Categories() {
  const loading = useSelector((state) => state.snackBar.loadingDetail);
  const categories = useSelector((state) => state.categories.catgorieSnack);
  const current = useSelector((state) => state.categories.current);
  const dispatch = useDispatch();

  function setCategoryFilter(cat) {
    dispatch(CatActions.setCurrent(cat));
  }

  return (
    <Container>
      <Title>Categorias</Title>
      {loading && (
        <ContLoad>
          <ShimmerLoad autoRun={true} visible={!loading}>
            <Shimmer />
          </ShimmerLoad>
          <ShimmerLoad autoRun={true} visible={!loading}>
            <Shimmer />
          </ShimmerLoad>
          <ShimmerLoad autoRun={true} visible={!loading}>
            <Shimmer />
          </ShimmerLoad>
          <ShimmerLoad autoRun={true} visible={!loading}>
            <Shimmer />
          </ShimmerLoad>
        </ContLoad>
      )}

      {categories.length > 0 && !loading ? (
        <CategoryList
          keyboardShouldPersistTabs="handled"
          data={categories}
          keyExtractor={(cat) => String(cat.id)}
          renderItem={({ item: cat }) => (
            <TabItemContainer onPress={() => setCategoryFilter(cat)}>
              <TabItem
                style={
                  current &&
                  cat.id == current.id && { backgroundColor: colors.secondary }
                }>
                <ImageIcon
                  tintColor={
                    current && cat.id == current.id
                      ? colors.whiter
                      : colors.secondary
                  }
                  source={{ uri: cat.categoryimg }}
                />
                <CategoryText
                  style={
                    current &&
                    cat.id == current.id && {
                      color: colors.whiter,
                    }
                  }>
                  {cat.name}
                </CategoryText>
              </TabItem>
            </TabItemContainer>
          )}
        />
      ) : (
        categories.length == 0 &&
        !loading && (
          <TabItemContainer>
            <NoCategory>Nenhuma categoria para essa lanchonete</NoCategory>
          </TabItemContainer>
        )
      )}
    </Container>
  );
}

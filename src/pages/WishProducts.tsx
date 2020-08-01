/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import List from '../components/ProductList';
import { useStore, observer } from '../store';

export default observer(function Products(): JSX.Element {
  const {
    product: { wishProducts, removeWish },
  } = useStore();

  return wishProducts.length > 0 ? (
    <List products={wishProducts} removeWish={removeWish} />
  ) : (
    <EmptyList>위시 리스트에 담긴 상품이 없습니다</EmptyList>
  );
});

const EmptyList = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 100%;
`;

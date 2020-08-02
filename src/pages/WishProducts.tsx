/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { useMemo, useEffect } from 'react';
import List from '../components/ProductList';
import { useStore, observer } from '../store';
import { throttle } from 'throttle-debounce';

export default observer(function Products(): JSX.Element {
  const {
    product: { wishProducts, removeWish },
    ui,
  } = useStore();

  const products = useMemo(() => {
    return wishProducts.slice(0, ui.productPage * 10);
  }, [ui.productPage, wishProducts]);

  useEffect(() => {
    if (document) {
      const handleScroll = throttle(100, () => {
        const {
          scrollHeight,
          scrollTop,
          clientHeight,
        } = document.documentElement;
        if (scrollHeight - scrollTop === clientHeight) {
          ui.productPage = ui.productPage + 1;
        }
      });
      document.addEventListener('scroll', handleScroll);
    }
  }, [ui.productPage]);

  return products.length > 0 ? (
    <List products={products} removeWish={removeWish} />
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

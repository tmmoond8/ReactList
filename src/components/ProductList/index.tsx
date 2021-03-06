/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import { useCallback } from 'react';
import ProductItem from './ProductItem';
import { mobile, desktop } from '../../styles';
import { Product } from '../../types';

export { useScrollFetch, useMemoryScroll } from './hooks';

interface ListProps {
  products: Product[];
  wishs?: Record<string, boolean | null>;
  toggleWish?: (id: number) => void;
  removeWish?: (id: number) => void;
}

const useHandler = (handler?: (id: number) => void) => {
  return useCallback(
    (id: number) => {
      handler && handler(id);
    },
    [handler],
  );
};

export default function List(props: ListProps) {
  const { products, wishs, toggleWish, removeWish } = props;
  const handleToggleWish = useHandler(toggleWish);
  const handleRemoveWish = useHandler(removeWish);

  return (
    <Wrapper>
      <CardList>
        {products.map((item) => (
          <ProductItem
            key={item.id}
            title={item.title}
            wish={wishs ? item.id in wishs : null}
            toggleWish={() => handleToggleWish(item.id)}
            removeWish={() => handleRemoveWish(item.id)}
            thumbnail={item.thumbnail}
            price={item.price}
          />
        ))}
      </CardList>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 16px;
`;

const CardList = styled.ol`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(2, 1fr);

  ${mobile(css`
    grid-template-columns: repeat(3, 1fr);
  `)}

  ${desktop(css`
    grid-template-columns: repeat(4, 1fr);
  `)}
`;

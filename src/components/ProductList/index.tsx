/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import { useCallback } from 'react';
import ProductItem from './ProductItem';
import { mobile, desktop } from '../../styles';
import { Product } from '../../types';

interface ListProps {
  products: Product[];
  wishs?: Record<string, boolean | null>;
  toggleWish?: (id: number) => void;
  removeWish?: (id: number) => void;
}

export default function List(props: ListProps): JSX.Element {
  const { products, wishs, toggleWish, removeWish } = props;
  const handleToggleWish = useCallback(
    (id: number) => {
      toggleWish && toggleWish(id);
    },
    [toggleWish],
  );
  const handleRemoveWish = useCallback(
    (id: number) => {
      removeWish && removeWish(id);
    },
    [removeWish],
  );
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
  grid-template-columns: repeat(2, 1fr);
  & > li {
    margin-top: 16px;
    margin-left: 16px;
  }
  & > li:nth-of-type(2n - 1) {
    margin-left: 0;
  }
  & > li:nth-of-type(1),
  & > li:nth-of-type(2) {
    margin-top: 0;
  }
  ${mobile(css`
    grid-template-columns: repeat(3, 1fr);
    & > li:nth-of-type(3) {
      margin-top: 0;
    }
    & > li:nth-of-type(2n - 1) {
      margin-left: 16px;
    }

    & > li:nth-of-type(3n - 2) {
      margin-left: 0;
    }
  `)}

  ${desktop(css`
    grid-template-columns: repeat(4, 1fr);
    & > li:nth-of-type(4) {
      margin-top: 0;
    }
    & > li:nth-of-type(3n - 2) {
      margin-left: 16px;
    }
    & > li:nth-of-type(4n - 3) {
      margin-left: 0;
    }
  `)}
`;

/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import { StoreContext, Stores } from '../../store';
import ProductItem from './ProductItem';
import { mobile, desktop } from '../../styles';
import { useContext } from 'react';

export default function List(): JSX.Element {
  const {
    product: { products },
  } = useContext(StoreContext) as Stores;
  return (
    <Wrapper>
      <CardList>
        {products.map((item) => (
          <ProductItem
            key={item.id}
            title={item.title}
            wish={true}
            toggleWish={() => {}}
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

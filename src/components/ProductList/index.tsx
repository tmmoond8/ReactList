/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import lists from './lists.json';
import ProductItem from './ProductItem';

export default function List(): JSX.Element {
  return (
    <Wrapper>
      <CardList>
        {lists.map((item) => (
          <ProductItem
            title={item.title}
            wish={item.wish}
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
  display: flex;
  flex-wrap: wrap;
  & > li {
    width: calc(50% - 8px);
    margin-top: 16px;
  }
  & > li:nth-child(2n) {
    margin-left: 16px;
  }
  & > li:nth-child(1),
  & > li:nth-child(2) {
    margin-top: 0;
  }
`;

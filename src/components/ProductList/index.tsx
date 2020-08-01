/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import lists from './lists.json';
import ProductItem from './ProductItem';
import { mobile, desktop } from '../../styles';

export default function List(): JSX.Element {
  return (
    <Wrapper>
      <CardList>
        {lists.map((item) => (
          <ProductItem
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
  & > li:nth-child(2n - 1) {
    margin-left: 0;
  }
  & > li:nth-child(1),
  & > li:nth-child(2) {
    margin-top: 0;
  }
  ${mobile(css`
    grid-template-columns: repeat(3, 1fr);
    & > li:nth-child(3) {
      margin-top: 0;
    }
    & > li:nth-child(2n - 1) {
      margin-left: 16px;
    }

    & > li:nth-child(3n - 2) {
      margin-left: 0;
    }
  `)}

  ${desktop(css`
    grid-template-columns: repeat(4, 1fr);
    & > li:nth-child(4) {
      margin-top: 0;
    }
    & > li:nth-child(3n - 2) {
      margin-left: 16px;
    }
    & > li:nth-child(4n - 3) {
      margin-left: 0;
    }
  `)}
`;

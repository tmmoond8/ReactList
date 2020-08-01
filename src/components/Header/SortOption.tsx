/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { useState } from 'react';
import { colors } from '../../styles';
import { navigations } from './constants';
import { useStore, observer } from '../../store';
import { SortOption } from '../../store/product';

export default observer(function Navigation(): JSX.Element {
  const { product } = useStore();
  return (
    <Nav>
      <ol>
        <NavItem
          onClick={() => (product.sortOption = SortOption.PriceDESC)}
          selected={product.sortOption === SortOption.PriceDESC}
        >
          가격 높은순
        </NavItem>
        <NavItem
          onClick={() => (product.sortOption = SortOption.PriceASC)}
          selected={product.sortOption === SortOption.PriceASC}
        >
          가격 낮은순
        </NavItem>
      </ol>
    </Nav>
  );
});

const Nav = styled.nav`
  ol {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    li + li {
      margin-left: 16px;
    }
  }
`;
const NavItem = styled.li<{ selected: boolean }>`
  color: ${(p) => (p.selected ? colors.white : colors.whiteA70)};
  cursor: pointer;
`;

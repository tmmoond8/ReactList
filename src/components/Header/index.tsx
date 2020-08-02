/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { colors } from '../../styles';
import Navigation from './Navigation';
import SortOption from './SortOption';

export default function Header(): JSX.Element {
  return (
    <Wrapper>
      <Navigation />
      <SortOption />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  margin: auto;
  padding: 0 16px;
  background-color: ${colors.sky};
  z-index: 100;
`;

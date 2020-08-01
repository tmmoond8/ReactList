/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { colors } from '../../styles';
import Navigation from './Navigation';

export default function Header(): JSX.Element {
  return (
    <Wrapper>
      <Navigation />
      <SortOtopn>SortOptions</SortOtopn>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  padding: 0 16px;
  background-color: ${colors.sky};
`;
const SortOtopn = styled.div``;

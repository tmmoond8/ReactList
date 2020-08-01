/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import colors from '../styles/colors';

interface HeaderProps {}

export default function Header(props: HeaderProps): JSX.Element {
  return (
    <Wrapper>
      <Navigation>Navigation</Navigation>
      <SortOtopn>SortOptions</SortOtopn>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  background-color: ${colors.sky};
`;
const Navigation = styled.nav``;
const SortOtopn = styled.div``;

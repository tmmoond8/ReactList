/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { useState, useCallback } from 'react';
import { colors } from '../../styles';
import { navigations } from './constants';
import { useStore } from '../../store';
import { PagePaths } from '../../types';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation(): JSX.Element {
  const location = useLocation();
  const [selectedTab, setSelectedTab] = useState(location.pathname);
  const {
    ui: { setScroll },
  } = useStore();
  const handleClickTab = useCallback(
    (link: string) => {
      setScroll(
        location.pathname as PagePaths,
        document.scrollingElement?.scrollTop ?? 0,
      );
      setSelectedTab(link);
    },
    [location.pathname, setScroll],
  );

  return (
    <Nav>
      <ol>
        {navigations.map(({ name, displayName, link }) => (
          <NavItem
            key={name}
            selected={selectedTab === link}
            onClick={() => handleClickTab(link)}
          >
            <Link to={link}>{displayName}</Link>
          </NavItem>
        ))}
      </ol>
    </Nav>
  );
}

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
`;

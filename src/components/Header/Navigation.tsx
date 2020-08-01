/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { useState } from 'react';
import { colors } from '../../styles';
import { navigations } from './constants';
import { Link } from 'react-router-dom';

export default function Navigation(): JSX.Element {
  const [selectedTab, setSelectedTab] = useState(navigations[0].name);
  return (
    <Nav>
      <ol>
        {navigations.map(({ name, displayName, link }) => (
          <NavItem
            key={name}
            selected={selectedTab === name}
            onClick={() => setSelectedTab(name)}
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

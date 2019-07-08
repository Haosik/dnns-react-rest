import React from 'react';
import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

// import { ALBUM_ROUTE } from './constants/routes';

const HeaderNavigation = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 100%;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
  box-shadow: 0px 2px 7px 0px rgba(69, 41, 87, 0.3);
`;

const Header = () => {
  return (
    <header>
      <HeaderNavigation>
        <Link to="/">
          &gt; H
          <span role="img" aria-label="donut">
            🍩
          </span>
          ME &lt;
        </Link>
      </HeaderNavigation>
    </header>
  );
};

export default Header;

import React from 'react';
import { Global, css } from '@emotion/core';

export default (
  <Global
    styles={css`
      html {
        box-sizing: border-box;
        height: 100%;
        line-height: 1.4;
      }

      *,
      *:before,
      *:after {
        box-sizing: inherit;
      }

      :focus:not(:focus-visible) {
        outline: none;
      }

      body {
        padding-top: 60px;
        font-family: 'Vollkorn', serif;
        color: #222;
      }

      a {
        font-weight: 700;
        color: #250250;
        text-decoration: none;
        transition: all 0.2s;
      }
      a:hover {
        filter: brightness(110%);
      }
      a:visited {
        color: #361361;
      }

      h1 {
        margin: 2em 0;
        text-align: center;
      }

      .container {
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
        padding: 0 20px;
      }

      .fullscreen {
        position: relative;
        z-index: 20;
      }
    `}
  />
);

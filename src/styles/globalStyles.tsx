/** @jsx jsx */
import { jsx, Global, css } from '@emotion/core';
import emotionReset from 'emotion-reset';

const customReset = css`
  a {
    text-decoration: none;
    color: unset;
  }
`;

export default function GlobalStyles(): JSX.Element {
  return <Global styles={[emotionReset, customReset]} />;
}

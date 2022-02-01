
import {css, injectGlobal } from '@emotion/css';

export const container = css`padding: 0 14px;max-width: 1024px;margin: auto;`

export const body = injectGlobal`
* {
  box-sizing: border-box;
}
html {
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}
body {
  margin: 0;
  font-family: "Roboto","HelveticaNeue","Helvetica Neue",sans-serif;
}`
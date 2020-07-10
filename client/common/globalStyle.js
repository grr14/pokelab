import { Global, css } from "@emotion/core"

export const GlobalStyle = (props) => (
  <Global
    {...props}
    styles={css`
      html {
        font-family: sans-serif;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        overflow-y: scroll;
      }
      body {
        margin: 0;
        padding: 0;
        height: 100%;
        width: 100%;
      }
    `}
  />
)

export default GlobalStyle

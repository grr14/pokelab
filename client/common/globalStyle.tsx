import { Global, css } from "@emotion/core"
import { withTheme } from "emotion-theming"
import { Theme } from "./types"
import { mq } from "./constants"

const makeGlobalStyles = (theme: Theme) => css`
  @import url("https://fonts.googleapis.com/css?family=Montserrat");
  html {
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    overflow-y: scroll;
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    height: 80%;
    width: 100%;
  }
  a {
    text-decoration: none;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  .slider {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .slider a.previousButton,
  .slider a.nextButton {
    font-size: 22px;
    line-height: 0;
    display: block;
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    -webkit-transition: all 0.3s linear;
    transition: all 0.3s linear;
    z-index: 1;
    padding: 10px;
    text-decoration: none;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    /* prevent jump effect when scaling */
  }

  polygon {
    fill: ${theme.body.text} !important;
  }

  .slider a.previousButton:not(.disabled):hover,
  .slider a.nextButton:not(.disabled):hover {
    -webkit-transform: translateY(-50%) scale(1.25);
    transform: translateY(-50%) scale(1.25);
    cursor: pointer;
  }

  .slider a.previousButton {
    ${mq[0]} {
      left: 10px;
    }

    ${mq[3]} {
      left: 0px;
    }
    ${mq[5]} {
      left: 15px;
    }
  }

  .slider a.nextButton {
    ${mq[0]} {
      right: 10px;
    }

    ${mq[3]} {
      right: 0px;
    }
    ${mq[5]} {
      right: 15px;
    }
  }

  .slide {
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
  }

  .slide.hidden {
    visibility: hidden;
  }

  .slide.previous {
    left: -100%;
  }

  .slide.current {
    left: 0;
  }

  .slide.next {
    left: 100%;
  }

  .slide.animateIn,
  .slide.animateOut {
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;
  }

  .slide.animateIn.previous,
  .slide.animateIn.next {
    left: 0;
    visibility: visible;
  }

  .slide.animateOut.previous {
    left: 100%;
  }

  .slide.animateOut.next {
    left: -100%;
  }
`

const GlobalStyle = withTheme(({ theme }) => (
  <Global styles={makeGlobalStyles(theme as Theme)} />
))

export default GlobalStyle

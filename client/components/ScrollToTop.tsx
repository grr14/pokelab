/** @jsx jsx */
import { jsx, css, keyframes } from "@emotion/core"
import React, { useState, useEffect } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons"
import { mq } from "../common/constants"

interface Props {
  visibleAtYOffset: number
}

const ScrollToTop: React.FC<Props> = ({ visibleAtYOffset }) => {
  const [visible, setVisible] = useState(false)

  const checkScrollTop = () => {
    if (!visible && window.pageYOffset > visibleAtYOffset) {
      setVisible(true)
    } else if (setVisible && window.pageYOffset <= visibleAtYOffset) {
      setVisible(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop)
    return () => window.removeEventListener("scroll", checkScrollTop)
  }, [])

  const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.5;
  }
`

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollTopCSS = css`
    display: ${visible ? "flex" : "none"};

    position: fixed;
    width: 100%;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    cursor: pointer;
    animation: ${fadeIn} 1s;
    transition: opacity 1s;
    opacity: 0.6;
    ${mq[0]} {
      font-size: 30px;
      bottom: 30px;
      right: 30px;
    }
    ${mq[2]} {
      font-size: 40px;
    }
    ${mq[5]} {
      font-size: 50px;
      bottom: 70px;
      right: 70px;
    }
  `
  return (
    <FontAwesomeIcon
      onClick={scrollTop}
      css={scrollTopCSS}
      icon={faArrowCircleUp}
    />
  )
}

export default ScrollToTop

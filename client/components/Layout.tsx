import React from "react"

import Header from "./Header"
import Footer from "./Footer"
import { MainContainer } from "./Containers"

interface Props {
  checked: boolean
  toggle: () => void
}

const Layout: React.FC<Props> = ({ children, checked, toggle }) => {
  return (
    <React.Fragment>
      <MainContainer>
        <Header checked={checked} toggle={toggle} />
        {children}
        <Footer />
      </MainContainer>
    </React.Fragment>
  )
}

export default Layout

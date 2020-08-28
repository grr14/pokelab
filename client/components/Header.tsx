/** @jsx jsx */
import { jsx } from "@emotion/core"
import styled from "@emotion/styled"

import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Switch from "@material-ui/core/Switch"
import Button from "@material-ui/core/Button"
import SearchIcon from "@material-ui/icons/Search"

import Link from "next/link"
import { Theme } from "../common/types"
import InputBase from "@material-ui/core/InputBase"
import { useState } from "react"

import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"

import Divider from "@material-ui/core/Divider"
import FormGroup from "@material-ui/core/FormGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import { mq, BREAKPOINTS } from "../common/constants"

import { useWindowSize } from "../common/hooks"

import React from "react"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import InboxIcon from "@material-ui/icons/MoveToInbox"
import MailIcon from "@material-ui/icons/Mail"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBars,
  faSignInAlt,
  faUserPlus,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons"
import MobileAppDrawer from "./MobileAppDrawer"

interface HeaderProps {
  checked: boolean
  toggle: () => void
}

interface Props {
  theme: Theme
}

const StyledMenu = styled(Menu)<Props>`
  & > .MuiPaper-root {
    background-color: ${(props) => props.theme.body.background} !important;
  }
`

const StyledAppBar = styled(AppBar)<Props>`
  background-color: ${(props) => props.theme.header.background} !important;
  font-family: ${(props) => props.theme.body.font} !important;
  color: ${(props) => props.theme.body.text} !important;
`

const Header: React.FC<HeaderProps> = ({ checked, toggle }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const size = useWindowSize()

  return (
    <div>
      <StyledAppBar elevation={10} position="static">
        <Toolbar
          css={{
            [mq[0]]: { display: "flex", flexDirection: "column" },
            [mq[1]]: { flexDirection: "row", justifyContent: "space-between" },
          }}
        >
          {size.width < BREAKPOINTS[2] ? (
            <React.Fragment>
              <div
                css={{
                  width: "100%",
                  [mq[0]]: {
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  },
                  [mq[1]]: { display: "contents" },
                }}
              >
                <Link href="/">
                  <a>
                    <img src={"/images/logo.png"} />
                  </a>
                </Link>
                <MobileAppDrawer checked={checked} toggle={toggle} />
              </div>
              <div
                css={(theme) => ({
                  [mq[0]]: { width: "100%", marginBottom: "10px" },
                  [mq[1]]: { width: "auto", marginBottom: 0, order: 0 },
                  [mq[2]]: { order: "unset" },
                  backgroundColor: theme.body.background,
                  border: "solid 1px rgba(200,200,200,1)",
                  borderRadius: "5px",
                  display: "flex",
                  alignItems: "center",
                  "&:hover": {
                    boxShadow: "0 0 0 1px red",
                  },
                })}
              >
                <SearchIcon
                  css={{
                    margin: "0 5px",
                    "&:hover": { cursor: "pointer" },
                  }}
                />
                <InputBase
                  placeholder="Search…"
                  css={(theme) => ({ color: theme.header.text })}
                  inputProps={{ "aria-label": "search" }}
                />
              </div>
            </React.Fragment>
          ) : null}
        </Toolbar>
      </StyledAppBar>
    </div>
  )
}

export default Header

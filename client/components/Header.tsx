/** @jsx jsx */
import { jsx } from "@emotion/core"
import styled from "@emotion/styled"

import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Switch from "@material-ui/core/Switch"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import SearchIcon from "@material-ui/icons/Search"

import Link from "next/link"
import { Theme } from "../common/types"
import InputBase from "@material-ui/core/InputBase"
import { useState } from "react"

import { withStyles } from "@material-ui/core/styles"

import Menu, { MenuProps } from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import Divider from "@material-ui/core/Divider"
import FormGroup from "@material-ui/core/FormGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"

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
`

interface HeaderProps {
  checked: boolean
  toggle: () => void
}

const Header: React.FC<HeaderProps> = ({ checked, toggle }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <StyledAppBar elevation={10} position="static">
        <Toolbar css={{ justifyContent: "space-between" }}>
          <div css={{ display: "flex", alignItems: "center" }}>
            <div css={{ marginRight: "10%" }}>
              <Link href="/">
                <a>
                  <img
                    css={{ width: "100%", height: "100%" }}
                    src={"/images/logo.png"}
                  />
                </a>
              </Link>
            </div>

            <Button
              css={(theme) => ({
                backgroundColor: `${theme.body.background} !important`,
                fontFamily: `${theme.body.font} !important`,
                marginRight: "5%",
                borderRadius: "2px",
                "&:hover": {
                  boxShadow: "0 0 0 1px red",
                },
              })}
              aria-controls="customized-menu"
              aria-haspopup="true"
              variant="contained"
              onClick={handleClick}
            >
              <b>Menu</b>
            </Button>
            <StyledMenu
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              elevation={24}
              getContentAnchorEl={null}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >
              <MenuItem
                css={(theme) => ({
                  fontFamily: `${theme.body.font} !important`,
                })}
              >
                <Link href="/">
                  <a css={{ textDecoration: "none" }}>Pokemons</a>
                </Link>
              </MenuItem>
              <Divider />
              <MenuItem
                css={(theme) => ({
                  fontFamily: `${theme.body.font} !important`,
                })}
              >
                <Link href="/types">
                  <a css={{ textDecoration: "none" }}>Types</a>
                </Link>
              </MenuItem>
            </StyledMenu>
          </div>

          <div css={{ display: "flex", alignItems: "center" }}>
            <div
              css={(theme) => ({
                backgroundColor: theme.body.background,
                border: "solid 1px rgba(200,200,200,1)",
                borderRadius: "5px",
                display: "flex",
                alignItems: "center",
                marginRight: "5%",
                "&:hover": {
                  boxShadow: "0 0 0 1px red",
                },
              })}
            >
              <SearchIcon
                css={{
                  color: "black",
                  margin: "0 5px",
                  "&:hover": { cursor: "pointer" },
                }}
              />
              <InputBase
                placeholder="Search…"
                css={{}}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
            <div
              css={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                marginRight: "5%",
              }}
            >
              <div>
                <FormGroup>
                  <FormControlLabel
                    labelPlacement="start"
                    control={
                      <Switch
                        size="medium"
                        checked={checked}
                        onChange={() => toggle()}
                      />
                    }
                    label="Night"
                  />
                </FormGroup>
              </div>
            </div>

            <Button
              css={(theme) => ({
                backgroundColor: `${theme.body.background} !important`,
                fontFamily: `${theme.body.font} !important`,
              })}
            >
              <b>Login</b>
            </Button>
          </div>
        </Toolbar>
      </StyledAppBar>
    </div>
  )
}

export default Header

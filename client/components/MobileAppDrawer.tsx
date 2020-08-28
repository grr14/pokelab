/** @jsx jsx */
import { jsx, css } from "@emotion/core"

import React, { useState } from "react"

import Link from "next/link"

import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import Switch from "@material-ui/core/Switch"
import Button from "@material-ui/core/Button"
import FormGroup from "@material-ui/core/FormGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import { mq } from "../common/constants"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBars,
  faSignInAlt,
  faUserPlus,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons"

interface HeaderProps {
  checked: boolean
  toggle: () => void
}

const MobileAppDrawer: React.FC<HeaderProps> = ({ checked, toggle }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return
    }

    setIsDrawerOpen(open)
  }

  const upperSectionCSS = css`
    justify-content: space-between !important;
  `

  const content = (
    <div
      css={(theme) => ({
        color: theme.body.text,
      })}
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List
        css={(theme) => ({
          borderBottom: `solid 1px ${theme.drawer.divider.section}`,
        })}
      >
        <ListItem button css={upperSectionCSS}>
          <FontAwesomeIcon icon={faSignInAlt} />
          Sign In
        </ListItem>
        <ListItem button css={upperSectionCSS}>
          <FontAwesomeIcon icon={faUserPlus} />
          Sign Up
        </ListItem>

        <ListItem css={upperSectionCSS}>
          <FontAwesomeIcon icon={checked ? faMoon : faSun} />
          <FormGroup>
            <FormControlLabel
              css={(theme) => ({ color: theme.body.text })}
              labelPlacement="start"
              control={
                <Switch
                  size="medium"
                  checked={checked}
                  onChange={() => toggle()}
                />
              }
              label={""}
            />
          </FormGroup>
        </ListItem>
      </List>

      <h2 css={{ margin: "0.83em 0 0 5%" }}>Menu:</h2>
      <List>
        {[
          {
            link: "/",
            text: "Pokemons",
          },
          {
            link: "/types",
            text: "Types",
          },
        ].map((el, idx) => (
          <ListItem
            key={idx}
            css={(theme) => ({
              justifyContent: "center !important",
              borderBottom: "solid 1px gray",
              "&:hover, &:active": {
                backgroundColor: theme.drawer.cellHover,
                color: theme.drawer.text.hover,
              },
            })}
          >
            <Link href={el.link}>
              <a css={{ textDecoration: "none" }}>{el.text}</a>
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  )

  return (
    <div css={{ [mq[1]]: { order: 1 } /* Put it on the right */ }}>
      <Button onClick={toggleDrawer(true)}>
        <FontAwesomeIcon
          css={(theme) => ({
            fontSize: "2em",
            color: theme.header.text,
          })}
          icon={faBars}
        />
      </Button>
      <Drawer
        css={(theme) => ({
          "& > .MuiDrawer-paper": {
            [mq[0]]: { width: "50%" },
            [mq[1]]: { width: "33.33%" },
            backgroundColor: theme.main.background,
          },
        })}
        anchor={"right" as "right"}
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
      >
        {content}
      </Drawer>
    </div>
  )
}

export default MobileAppDrawer

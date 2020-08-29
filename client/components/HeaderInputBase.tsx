/** @jsx jsx */
import { jsx } from "@emotion/core"

import SearchIcon from "@material-ui/icons/Search"
import InputBase from "@material-ui/core/InputBase"

import React from "react"

const HeaderInputBase = () => {
  return (
    <React.Fragment>
      <SearchIcon
        css={{
          margin: "0 5px",
          "&:hover": { cursor: "pointer" },
        }}
      />
      <InputBase
        placeholder="Search…"
        css={(theme) => ({
          fontFamily: `${theme.body.font} !important`,
          color: `${theme.header.text} !important`,
        })}
        inputProps={{ "aria-label": "search" }}
      />
    </React.Fragment>
  )
}

export default HeaderInputBase

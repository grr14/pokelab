/** @jsx jsx */
import { jsx } from "@emotion/core"
import { useState, SyntheticEvent } from "react"

import Link from "next/link"

import {
  capitalizeSentence,
  formatLocationNameWithRegion,
} from "../common/utils"
import {
  abilities,
  moves,
  pokemons,
  types,
  locations,
} from "../common/constants"
import { Theme, SearchInputOption } from "../common/types"

import SearchIcon from "@material-ui/icons/Search"
import Autocomplete, {
  AutocompleteRenderInputParams,
} from "@material-ui/lab/Autocomplete"
import { Popper, PopperProps } from "@material-ui/core"

const ComboBox = () => {
  const [open, setOpen] = useState(false)
  const [userInput, setUserInput] = useState<string>("")

  const handleInputChange = (event: SyntheticEvent, value: string) => {
    setUserInput(value)
  }

  const CustomPopper = (props: PopperProps) => (
    <Popper
      {...props}
      css={(theme: Theme) => ({
        border: `solid 0.5px ${theme.header.button.border}`,
        borderTop: "none",
        backgroundColor: theme.input.background,
        width: "300px",
        "& > .MuiPaper-root": {
          backgroundColor: theme.input.background,
          fontFamily: theme.body.font,
        },
        "& > div > ul > li": {
          borderBottom: "solid 1px #E31010",
          "&:hover": { backgroundColor: "auto" },
        },
        "& > div > .MuiAutocomplete-noOptions": {
          color: theme.input.text,
        },
      })}
      placement="bottom-start"
    />
  )

  const center = { display: "flex", alignItems: "center" }
  const centerAndSpace = {
    ...center,
    justifyContent: "space-between",
  }

  const renderInput = (params: AutocompleteRenderInputParams) => (
    <div ref={params.InputProps.ref} css={{ ...centerAndSpace }}>
      <SearchIcon
        css={{
          margin: "0 5px",
          "&:hover": { cursor: "pointer" },
        }}
      />
      <input
        placeholder="Search..."
        css={(theme) => ({
          width: "auto",
          backgroundColor: theme.input.background,
        })}
        type="text"
        {...params.inputProps}
      />
    </div>
  )

  const renderOption = (option: SearchInputOption) => (
    <div css={{ ...centerAndSpace, width: "100%" }}>
      <Link href={`/${option.type.toLowerCase()}/${option.id}`}>
        <a
          css={(theme) => ({
            width: "100%",
            color: theme.input.text,
          })}
        >
          {capitalizeSentence(formatLocationNameWithRegion(option.identifier), [
            "of",
          ])}
        </a>
      </Link>
      <span css={(theme) => ({ fontSize: "0.66em", color: theme.input.text })}>
        <i>{option.type}</i>
      </span>
    </div>
  )

  return (
    <Autocomplete
      css={{ width: "100%" }}
      id="headerAutoComplete"
      open={open && userInput.length > 2}
      onOpen={() => {
        setOpen(true)
      }}
      onClose={() => {
        setOpen(false)
      }}
      onInputChange={handleInputChange}
      options={[...pokemons, ...types, ...abilities, ...moves, ...locations]}
      getOptionLabel={(option) => option.identifier}
      renderInput={(params) => renderInput(params)}
      renderOption={(option) => renderOption(option)}
      noOptionsText="No result found."
      PopperComponent={CustomPopper}
    />
  )
}

const HeaderInputBase = () => {
  return <ComboBox />
}

export default HeaderInputBase

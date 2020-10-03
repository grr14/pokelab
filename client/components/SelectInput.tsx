/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"

import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Tabs,
  Tab,
} from "@material-ui/core"
import { SelectInputProps } from "@material-ui/core/Select/SelectInput"

interface Props {
  value: unknown
  menuChoices: Array<number>
  onChange: SelectInputProps["onChange"]
  label?: string
  menuChoicesDisplay?: (num: number) => string
}

const SelectInput: React.FC<Props> = ({
  value,
  menuChoices,
  onChange,
  label,
  menuChoicesDisplay,
}) => {
  return (
    <FormControl css={{ minWidth: "120px" }}>
      {!!label && (
        <InputLabel
          id="select-version"
          css={(theme) => ({
            color: `${theme.body.text} !important`,
            opacity: "0.5",
          })}
        >
          {label}
        </InputLabel>
      )}
      <Select
        labelId="select-version"
        id="select-version"
        value={value}
        onChange={onChange}
        css={(theme) => ({
          color: theme.body.text,
          fontFamily: theme.body.font,
          "&>svg.MuiSvgIcon-root.MuiSelect-icon": {
            color: `${theme.body.text} !important`,
          },
          "&.MuiInput-underline:before": {
            borderBottom: `solid 1px #E31010 !important`,
          },
          "&.MuiInput-underline:hover:not(.Mui-disabled):before": {
            borderBottom: `solid 2px #E31010 !important`,
          },
          "&.MuiInput-underline:after": {
            borderBottom: `solid 2px #E31010 !important`,
          },
          "&.MuiInputBase-root": {
            fontFamily: `${theme.body.font} !important`,
          },
        })}
      >
        {menuChoices.map((vers, idx) => (
          <MenuItem key={idx} value={vers}>
            {!!menuChoicesDisplay ? menuChoicesDisplay(vers) : vers}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default SelectInput
